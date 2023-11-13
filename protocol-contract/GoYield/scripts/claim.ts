/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-bitwise */
/* eslint-disable import/newline-after-import */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import algosdk from "algosdk";
import dataContract from "../data/contracts.json";
import { NftHubClient } from "../contracts/clients/NftHubClient";
require('dotenv').config();

export async function claim(signer: algosdk.TransactionSigner, senderAddr: string, tokenId: number, amount: number) {

  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const hub = new NftHubClient(
    {
      sender: account,
      resolveBy: 'id',
      id: dataContract.contracts.hub.appId,
    },
    algodClient,
  );

  const atc = new algosdk.AtomicTransactionComposer();
  const params = await algodClient.getTransactionParams().do();
  
  // 1. checkwinner onchain
  atc.addMethodCall({
    appID: dataContract.contracts.hub.appId,
    method: hub.appClient.getABIMethod('checkWinner') as algosdk.ABIMethod,
    methodArgs: [tokenId, amount],
    sender: senderAddr,
    signer: signer,
    suggestedParams: { ...params, fee: 4000, flatFee: true },
    appForeignApps: [dataContract.contracts.nft.appId, dataContract.contracts.vrf.appId],
    boxes: [{ appIndex: dataContract.contracts.nft.appId, name: algosdk.encodeUint64(tokenId) }],
  });

  // 2. send payment to user
  const payment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: amount,
    from: account.addr,
    suggestedParams: await algodClient.getTransactionParams().do(),
    to: senderAddr,
  })

  atc.addTransaction({ txn: payment, signer: algosdk.makeBasicAccountTransactionSigner(account)})

  const e = await atc.execute(algodClient, 4);

  return e.txIDs
}
