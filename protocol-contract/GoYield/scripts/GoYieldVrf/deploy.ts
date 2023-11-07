/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { ConsumeVrfClient } from '../../contracts/clients/ConsumerVRFClient';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const stat = await algodClient.status().do();
  const lastRound = stat['last-round'] + 100000;
  const randomOracleAppID = 110096026;
  const consumevrf = new ConsumeVrfClient(
    {
      sender: account,
      resolveBy: 'id',
      id: 0,
    },
    algodClient,
  );
  await consumevrf.create.createApplication({ randomOracleApp: randomOracleAppID, _round: lastRound });
}

main();
