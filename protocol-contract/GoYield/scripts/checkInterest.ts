import algosdk, { Indexer } from "algosdk";
import { TestnetDepositsAppId, TestnetOracle, TestnetPoolManagerAppId, TestnetPools, retrieveUserDepositsFullInfo } from "folks-finance-js-sdk";

require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const indexerClient = new Indexer('', 'https://testnet-idx.algonode.cloud', 443);

  const d = await retrieveUserDepositsFullInfo(indexerClient, TestnetPoolManagerAppId, TestnetDepositsAppId, TestnetPools, TestnetOracle, account.addr);
  return d[0].holdings[0].assetBalance - BigInt(10_000_000);
}

main();