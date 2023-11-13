/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import algosdk from "algosdk";
import dataContract from '../data/contracts.json';
import { ConsumeVrfClient } from "../contracts/clients/ConsumerVRFClient";
import { checkInterest } from "./checkInterest";
import { TestnetDepositsAppId, TestnetPoolManagerAppId, TestnetPools, depositsABIContract, poolABIContract } from "folks-finance-js-sdk";
import { NftHubClient } from "../contracts/clients/NftHubClient";

require('dotenv').config();

export async function draw(signer: algosdk.TransactionSigner, senderAddr: string) {

  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const passphrase2 = process.env.NEXT_PUBLIC_ESCROW_FOLK;
  
  const escrowAcc = algosdk.mnemonicToSecretKey(passphrase2 as string);
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const vrfAppId = dataContract.contracts.vrf.appId;
  const hubAppId = dataContract.contracts.hub.appId;

  const vrf = new ConsumeVrfClient(
    {
      sender: account,
      resolveBy: 'id',
      id: vrfAppId,
    },
    algodClient,
  );

  const hub = new NftHubClient(
    {
      sender: account,
      resolveBy: 'id',
      id: hubAppId,
    },
    algodClient,
  );


  const atc = new algosdk.AtomicTransactionComposer();
  const params = await algodClient.getTransactionParams().do();
  // 1.call draw method on vrf contract
  atc.addMethodCall({
    appID: vrfAppId,
    method: vrf.appClient.getABIMethod('getRandomBytes') as algosdk.ABIMethod,
    sender: senderAddr,
    signer: signer,
    suggestedParams: { ...params, fee: 2000, flatFee: true },
    appForeignApps: [110096026],
  });
  console.log('here bajiangan');

  // 2. call setclaimed default
  atc.addMethodCall({
    appID: hubAppId,
    method: hub.appClient.getABIMethod('setClaimedDefault') as algosdk.ABIMethod,
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: await algodClient.getTransactionParams().do(),
  })

  // 3. get interest
  const dataBalance = await checkInterest();

  // 4. set win amount
  atc.addMethodCall({
    appID: hubAppId,
    method: hub.appClient.getABIMethod('setwinAmount') as algosdk.ABIMethod,
    methodArgs: [dataBalance.reward],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: await algodClient.getTransactionParams().do(),
  })

  // 5. withdraw from folk finance
  atc.addMethodCall({
    appID: TestnetDepositsAppId,
    method: algosdk.getMethodByName(depositsABIContract.methods, 'withdraw'),
    methodArgs: [
      escrowAcc.addr,
      account.addr,
      TestnetPoolManagerAppId,
      TestnetPools.ALGO.appId,
      TestnetPools.ALGO.assetId,
      TestnetPools.ALGO.fAssetId,
      dataBalance.reward,
      false,
      false,
      TestnetPools.ALGO.poolManagerIndex
    ],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: { ...await algodClient.getTransactionParams().do(), fee: 6000, flatFee: true}
  })

  try {
    await atc.execute(algodClient, 4);
    return true;
  } catch (error) {
    return false;
  }
}