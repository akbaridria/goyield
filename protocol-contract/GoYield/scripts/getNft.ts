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

async function main() {
  const passphrase2 = process.env.SEED_PHRASE;

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
  const e = await nft.arc72GetImage({ _tokenId: 0 }, { boxes: [{ appId: nftAppId, name: algosdk.encodeUint64(0) }] });
  console.log(e);
}

main();
