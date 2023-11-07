// eslint-disable-next-line no-unused-vars
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { GoYieldNftClient } from '../../contracts/clients/GoYieldNFTClient';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const goyieldnft = new GoYieldNftClient(
    {
      sender: account,
      resolveBy: 'id',
      id: 0,
    },
    algodClient,
  );
  await goyieldnft.create.createApplication({ _name: 'Go Yield NFT', _symbol: 'GYN' });
}

main();
