import algosdk from "algosdk";
import { ConsumeVrfClient } from "../contracts/clients/ConsumerVRFClient";
import dataContract from '../data/contracts.json';

export async function getLeftRound() {
  const passphrase = process.env.NEXT_PUBLIC_ESCROW;
  const account = algosdk.mnemonicToSecretKey(passphrase as string);
  const algodClient = new algosdk.Algodv2('a'.repeat(64), 'https://testnet-api.algonode.cloud', '');
  const vrfAppId = dataContract.contracts.vrf.appId;

  const vrf = new ConsumeVrfClient(
    {
      sender: account,
      resolveBy: 'id',
      id: vrfAppId,
    },
    algodClient,
  );
  
  const d = await algodClient.status().do();
  const lastRound = d['last-round'];
  const drawRound = (await vrf.getGlobalState()).round?.asNumber() || 0
  return drawRound - lastRound;
}