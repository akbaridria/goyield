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
import { uint8ArrayToIntegerArray } from '../scripts/getWinners';

require('dotenv').config();

export async function getClaimedPrize() {
  const passphrase2 = process.env.NEXT_PUBLIC_ESCROW;

  const accountTest = algosdk.mnemonicToSecretKey(passphrase2 as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const hubAppId = dataContract.contracts.hub.appId;

  const hub = new NftHubClient(
    {
      sender: accountTest,
      resolveBy: 'id',
      id: hubAppId,
    },
    algodClient,
  );

  const d = (await hub.getGlobalState()).claimed?.asByteArray();
  if(!!d) {
    return uint8ArrayToIntegerArray(d).map((item) => Number(item))
  } else {
    return []
  }
}