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
require('dotenv').config();

export async function getImage(tokenId: number) {
  const passphrase2 = process.env.NEXT_PUBLIC_SEED_PHRASE;

  const accountTest = algosdk.mnemonicToSecretKey(passphrase2 as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const nftAppId = dataContract.contracts.nft.appId;

  const nft = new GoYieldNftClient(
    {
      sender: accountTest,
      resolveBy: 'id',
      id: dataContract.contracts.nft.appId,
    },
    algodClient,
  );
  const atc = new algosdk.AtomicTransactionComposer();
  atc.addMethodCall({
    appID: nftAppId,
    method: nft.appClient.getABIMethod('arc72_custom_getTokenDetail') as algosdk.ABIMethod,
    methodArgs: [tokenId],
    sender: accountTest.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(accountTest),
    suggestedParams: await algodClient.getTransactionParams().do(),
    boxes: [{ appIndex: nftAppId, name: algosdk.encodeUint64(tokenId) }]
  })
  const e = await atc.simulate(algodClient)
  const value = e.methodResults[0].returnValue;

  if(!!value) {
    return value as algosdk.ABIValue[]
  }
  return [] as algosdk.ABIValue[];
}
