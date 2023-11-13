import algosdk from "algosdk";
import { NftHubClient } from "../contracts/clients/NftHubClient";
import datasContract from '../data/contracts.json'

export async function getWinAmount() {
  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);

  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const hubAppId = datasContract.contracts.hub.appId

  const hub = new NftHubClient(
    {
      sender: account,
      resolveBy: 'id',
      id: hubAppId,
    },
    algodClient,
  );
  
  const amount = (await hub.getGlobalState()).winAmount || BigInt(0)
  return Number(amount);
  
}