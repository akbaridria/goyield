/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import algosdk from "algosdk";
import { GoYieldNftClient } from "../contracts/clients/GoYieldNFTClient";
import dataContract from '../data/contracts.json';

require('dotenv').config();
async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  // const params = await algodClient.getTransactionParams().do();
  const nftAppId = dataContract.contracts.nft.appId;

  const nft = new GoYieldNftClient(
    {
      sender: account,
      resolveBy: 'id',
      id: nftAppId,
    },
    algodClient,
  );

  const template = `<svg id="visual" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="900" fill=""></rect><g transform="translate( )"><path d="M198.4 -228.2C243.5 -153.2 257.3 -76.6 271.8 14.5C286.3 105.6 301.5 211.2 256.4 273.5C211.2 335.9 105.6 354.9 26.3 328.6C-53 302.4 -106.1 230.7 -167.7 168.4C-229.4 106.1 -299.7 53 -311.1 -11.4C-322.6 -75.9 -275.1 -151.8 -213.5 -226.8C-151.8 -301.8 -75.9 -375.9 0.4 -376.2C76.6 -376.6 153.2 -303.2 198.4 -228.2" fill=""></path></g></svg>`;
  const d = await nft.udpdateTemplate({ _template: template }, { boxes: [{ appId: nftAppId, name: new Uint8Array([...new TextEncoder().encode('template'), ...algosdk.encodeUint64(0)]) }] });
  console.log(d);
}
main();
