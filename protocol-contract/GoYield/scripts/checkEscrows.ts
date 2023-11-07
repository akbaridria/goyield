/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */

import algosdk, { Indexer } from "algosdk";
import { TestnetDepositsAppId } from "folks-finance-js-sdk";

require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const indexerClient = new Indexer('', 'https://testnet-idx.algonode.cloud', 443);

  const escrows: Set<string> = new Set();
  const added = await indexerClient
    .searchForTransactions()
    .address(account.addr)
    .addressRole("sender")
    .txType("pay")
    .notePrefix(new TextEncoder().encode("da "))
    .do();

  // eslint-disable-next-line no-restricted-syntax
  for (const txn of added["transactions"]) {
    const receiver: string = txn["payment-transaction"]["receiver"];
    if (receiver === algosdk.getApplicationAddress(TestnetDepositsAppId)) {
      const note: Uint8Array = Buffer.from(txn["note"], "base64");
      const address = algosdk.encodeAddress(note.slice("da ".length));
      escrows.add(address);
    }
  }
}

main();
