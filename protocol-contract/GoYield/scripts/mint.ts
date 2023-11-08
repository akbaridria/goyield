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
require('dotenv').config();

const randomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
const randomNumber = () => Math.floor(Math.random() * (500 - 0 + 1)) + 0;

async function main() {
  const passphrase = process.env.ESCROW;
  const passphrase2 = process.env.SEED_PHRASE;
  const passphrase3 = process.env.ESCROW_FOLK;

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
    from: accountTest.addr,
    suggestedParams: { ...params, fee: 2000, flatFee: true },
    to: account.addr,
  });
  atc.addTransaction({ txn: payment1, signer: algosdk.makeBasicAccountTransactionSigner(accountTest) });

  // send 1 algo to nft contract address for boxes
  const payment2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 1_000_000,
    from: accountTest.addr,
    to: algosdk.getApplicationAddress(dataContract.contracts.nft.appId),
    suggestedParams: { ...params, fee: 2000, flatFee: true },
  });
  atc.addTransaction({ txn: payment2, signer: algosdk.makeBasicAccountTransactionSigner(accountTest) });

  // call mint function in nft contract
  const template = new TextEncoder().encode("template");
  const combined = new Uint8Array([...template, ...algosdk.encodeUint64(0)]);
  const tokenId = (await nft.getGlobalState()).counter?.asNumber() || 0;
  console.log(tokenId);
  atc.addMethodCall({
    appID: dataContract.contracts.nft.appId,
    method: nft.appClient.getABIMethod('mint') as algosdk.ABIMethod,
    methodArgs: [randomColor(), randomColor(), `${randomNumber()}`, `${randomNumber()}`, accountTest.addr],
    boxes: [{ appIndex: nftAppId, name: combined }, { appIndex: nftAppId, name: algosdk.encodeUint64(tokenId) }, { appIndex: nftAppId, name: algosdk.decodeAddress(accountTest.addr).publicKey }],
    sender: accountTest.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(accountTest),
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
    amount: 10_000_000,
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
  console.log(atc.count());
  const d = await atc.execute(algodClient, 4);
  console.log(d);
}

main();
