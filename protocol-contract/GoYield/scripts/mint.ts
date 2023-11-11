/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
/* eslint-disable import/newline-after-import */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import algosdk from "algosdk";
import dataContract from "../data/contracts.json";
import { GoYieldNftClient } from "../contracts/clients/GoYieldNFTClient";
import { NftHubClient } from "../contracts/clients/NftHubClient";
import { TestnetPoolManagerAppId, TestnetPools, poolABIContract } from "folks-finance-js-sdk";
import { PropsMint } from '../../../src/app/globalInterface'
require('dotenv').config();

export async function getLatestTokenId() {
  const passphrase2 = process.env.NEXT_PUBLIC_SEED_PHRASE;
  const accountTest = algosdk.mnemonicToSecretKey(passphrase2 as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const nft = new GoYieldNftClient(
    {
      sender: accountTest,
      resolveBy: 'id',
      id: dataContract.contracts.nft.appId,
    },
    algodClient,
  );
  return (await nft.getGlobalState()).counter?.asNumber() || 0;
}

export async function mintNft(signer: algosdk.TransactionSigner, senderAddr: string, extraData: PropsMint ) {
  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const passphrase2 = process.env.NEXT_PUBLIC_SEED_PHRASE;
  const passphrase3 = process.env.NEXT_PUBLIC_ESCROW_FOLK;
  const jwtPinataKey = process.env.NEXT_PUBLIC_PINATA;


  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const accountTest = algosdk.mnemonicToSecretKey(passphrase2 as string);
  const accountFolk = algosdk.mnemonicToSecretKey(passphrase3 as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const atc = new algosdk.AtomicTransactionComposer();
  const params = await algodClient.getTransactionParams().do();
  const nftAppId = dataContract.contracts.nft.appId;

  const nft = new GoYieldNftClient(
    {
      sender: accountTest,
      resolveBy: 'id',
      id: dataContract.contracts.nft.appId,
    },
    algodClient,
  );

  const hub = new NftHubClient(
    {
      sender: accountTest,
      resolveBy: 'id',
      id: dataContract.contracts.hub.appId,
    },
    algodClient,
  );

  // send 1 algo to escrow address
  const payment1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 10_000_000,
    from: senderAddr,
    suggestedParams: { ...params, fee: 2000, flatFee: true },
    to: account.addr,
  });
  atc.addTransaction({ txn: payment1, signer: signer });

  // send 1 algo to nft contract address for boxes
  const payment2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 1_000_000,
    from: senderAddr,
    to: algosdk.getApplicationAddress(dataContract.contracts.nft.appId),
    suggestedParams: { ...params, fee: 2000, flatFee: true },
  });
  atc.addTransaction({ txn: payment2, signer: signer });

  // call mint function in nft contract
  const template = new TextEncoder().encode("template");
  const combined = new Uint8Array([...template, ...algosdk.encodeUint64(0)]);
  // const tokenId = (await nft.getGlobalState()).counter?.asNumber() || 0;

  atc.addMethodCall({
    appID: dataContract.contracts.nft.appId,
    method: nft.appClient.getABIMethod('mint') as algosdk.ABIMethod,
    methodArgs: [extraData.randColor1, extraData.randColor2, `${extraData.randNumber1}`, `${extraData.randNumber2}`, extraData.tokenUri, accountTest.addr],
    boxes: [{ appIndex: nftAppId, name: combined }, { appIndex: nftAppId, name: algosdk.encodeUint64(extraData.tokenId) }, { appIndex: nftAppId, name: algosdk.decodeAddress(accountTest.addr).publicKey }],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: { ...params, fee: 2000, flatFee: true },
  });

  // call depositToFolk in nfthub contrac
  atc.addMethodCall({
    appID: dataContract.contracts.hub.appId,
    method: hub.appClient.getABIMethod('depositToFolk') as algosdk.ABIMethod,
    methodArgs: [100_000],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: { ...params, fee: 2000, flatFee: true },
  });

  // deposit into folk finance
  const { appId, fAssetId, assetId } = TestnetPools.ALGO

  const mintFee = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 5_000_000,
    from: account.addr,
    suggestedParams: { ...params, fee: 0, flatFee: true},
    to: algosdk.getApplicationAddress(appId),
  })

  atc.addMethodCall({
    appID: appId,
    method: algosdk.getMethodByName(poolABIContract.methods, 'deposit'),
    methodArgs: [{ txn: mintFee, signer: algosdk.makeBasicAccountTransactionSigner(account) }, accountFolk.addr, assetId, fAssetId, TestnetPoolManagerAppId ],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: { ...params, fee: 4000, flatFee: true},
  })

  // execute
  try {
    const d = await atc.execute(algodClient, 4);
    return d.txIDs;
  } catch (error) {
    return []
  }
}