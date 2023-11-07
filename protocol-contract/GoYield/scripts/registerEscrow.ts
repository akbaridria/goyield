/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import algosdk, { AtomicTransactionComposer } from "algosdk";
import {
  TestnetDepositsAppId,
  TestnetPoolManagerAppId,
  TestnetPools,
  depositsABIContract,
} from 'folks-finance-js-sdk';

require('dotenv').config();

async function main() {
  const passphrase = process.env.ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const params = await algodClient.getTransactionParams().do();

  const atc = new AtomicTransactionComposer();

  // generate account
  const escrow = algosdk.generateAccount();

  // fund account
  const fundAcc = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 350_000,
    from: account.addr,
    to: escrow.addr,
    suggestedParams: { ...params, fee: 2000, flatFee: true },
  });
  atc.addTransaction({ txn: fundAcc, signer: algosdk.makeBasicAccountTransactionSigner(account) });

  // send payment 0 algo to depsoit app id with custom notes
  const payment = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    amount: 0,
    from: account.addr,
    to: algosdk.getApplicationAddress(TestnetDepositsAppId),
    suggestedParams: { ...params, fee: 2000, flatFee: true },
    note: new Uint8Array([...new TextEncoder().encode("da "), ...algosdk.decodeAddress(escrow.addr).publicKey]),
  });

  // call add_deposit_escrow from escrow account
  atc.addMethodCall({
    sender: escrow.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(escrow),
    appID: TestnetDepositsAppId,
    onComplete: algosdk.OnApplicationComplete.OptInOC,
    method: algosdk.getMethodByName(depositsABIContract.methods, "add_deposit_escrow"),
    methodArgs: [{ txn: payment, signer: algosdk.makeBasicAccountTransactionSigner(account) }],
    rekeyTo: algosdk.getApplicationAddress(TestnetDepositsAppId),
    suggestedParams: { ...params, flatFee: true, fee: 0 },
  });

  // optin to fAssets
  atc.addMethodCall({
    sender: account.addr,
    signer: algosdk.makeBasicAccountTransactionSigner(account),
    appID: TestnetDepositsAppId,
    method: algosdk.getMethodByName(depositsABIContract.methods, "opt_escrow_into_asset"),
    methodArgs: [escrow.addr, TestnetPoolManagerAppId, TestnetPools.ALGO.appId, TestnetPools.ALGO.fAssetId, TestnetPools.ALGO.poolManagerIndex],
    suggestedParams: { ...params, flatFee: true, fee: 2000 },
  });

  // execute txs
  const res = await atc.execute(algodClient, 4);
  console.log(res);
}
main();
