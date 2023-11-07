/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import algosdk from "algosdk";
import dataContract from '../data/contracts.json';
import { ConsumeVrfClient } from "../contracts/clients/ConsumerVRFClient";

require('dotenv').config();

function uint8ArrayToIntegerArray(uint8Array: Uint8Array) {
  if (uint8Array.length % 8 !== 0) {
    throw new Error("Input array length must be a multiple of 8");
  }

  const result = [];

  for (let i = 0; i < uint8Array.length; i += 8) {
    const view = new DataView(uint8Array.buffer, i, 8);
    const value = view.getBigUint64(0, true); // Interpret as little-endian
    result.push(Number(value));
  }

  return result;
}

async function main() {
  const passphrase = process.env.ESCROW;
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
  console.log(uint8ArrayToIntegerArray(d as Uint8Array));
}

main();
