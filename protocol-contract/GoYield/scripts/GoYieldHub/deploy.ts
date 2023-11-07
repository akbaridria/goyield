// eslint-disable-next-line no-unused-vars
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { NftHubClient } from '../../contracts/clients/NftHubClient';
import dataContract from '../../data/contracts.json';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const nftAppId = dataContract.contracts.nft.appId;
  const vrfAppId = dataContract.contracts.vrf.appId;
  const testAlgo = new NftHubClient(
    {
      sender: account,
      resolveBy: 'id',
      id: 0,
    },
    algodClient,
  );
  await testAlgo.create.createApplication({ nftAppId, vrfAppId });
}

main();
