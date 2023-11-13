/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import algosdk from "algosdk";
import dataContract from '../data/contracts.json';
import { ConsumeVrfClient } from "../contracts/clients/ConsumerVRFClient";

require('dotenv').config();

export function uint8ArrayToIntegerArray(uint8Array: Uint8Array) {
  const newArray = new Array(length); // Initialize the newArray variable.
  const buffer = Buffer.from(uint8Array);
  for (let i = 0; i < uint8Array.length; i += 8) {
    newArray[i/8] = buffer.readBigUInt64BE(i)

  }
  return newArray;
}

export async function getWinners() {
  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const vrfAppId = dataContract.contracts.vrf.appId;

  const vrf = new ConsumeVrfClient(
    {
      sender: account,
      resolveBy: 'id',
      id: vrfAppId,
    },
    algodClient,
  );
  const d = (await vrf.getGlobalState()).winnerNumbers?.asByteArray();
  if(!!d) {
    const test = uint8ArrayToIntegerArray(d as Uint8Array)
    return uint8ArrayToIntegerArray(d as Uint8Array);
  } else {
    return []
  }
}
