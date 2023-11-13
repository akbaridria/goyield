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

  for (let i = 0; i < uint8Array.length; i += 8) {
    const chunk = uint8Array.subarray(i, i + 8);

    // Convert the chunk to a number using a DataView.
    const dataView = new DataView(chunk.buffer);
    const number = dataView.getBigUint64(0);

    newArray[i / 8] = number;
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
    console.log('here')
    console.log(uint8ArrayToIntegerArray(d as Uint8Array))
    return uint8ArrayToIntegerArray(d as Uint8Array);
  } else {
    console.log(d)
    return []
  }
}
