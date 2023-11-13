import algosdk, { Indexer } from "algosdk";
import { TestnetDepositsAppId, TestnetOracle, TestnetPoolManagerAppId, TestnetPools, retrieveUserDepositsFullInfo } from "folks-finance-js-sdk";
import { NftHubClient } from "../contracts/clients/NftHubClient";
import dataContract from '../data/contracts.json';

require('dotenv').config();

export async function checkInterest() {
  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const indexerClient = new Indexer('', 'https://testnet-idx.algonode.cloud', 443);

  const d = await retrieveUserDepositsFullInfo(indexerClient, TestnetPoolManagerAppId, TestnetDepositsAppId, TestnetPools, TestnetOracle, account.addr);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const hub = new NftHubClient(
    {
      sender: account,
      resolveBy: 'id',
      id: dataContract.contracts.hub.appId,
    },
    algodClient,
  );
  const balance = (await hub.getGlobalState()).balance?.asBigInt() || BigInt(0);
  console.log(balance)
  const reward = d[0].holdings[0].assetBalance - balance
  return { balance, reward};
}