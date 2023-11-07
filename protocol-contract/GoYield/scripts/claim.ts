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

async function main() {
  const passphrase = process.env.SEED_PHRASE;
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

  atc.addMethodCall({
    appID: dataContract.contracts.hub.appId,
    method: hub.appClient.getABIMethod('checkWinner') as algosdk.ABIMethod,
    methodArgs: [0, 0],
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    suggestedParams: { ...params, fee: 4000, flatFee: true },
    appForeignApps: [dataContract.contracts.nft.appId, dataContract.contracts.vrf.appId],
    boxes: [{ appIndex: dataContract.contracts.nft.appId, name: algosdk.encodeUint64(0) }],
  });

  const e = await atc.execute(algodClient, 4);
  console.log(e.methodResults);
}

main();
