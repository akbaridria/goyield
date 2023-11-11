import { randomColor, randomNumber } from "./utils";
import { PropsMint } from "@/app/globalInterface";

export const saveFileToIpfs = async (tokenId: number) => {
  const pinataSDK = require('@pinata/sdk');
  const pinata = new pinataSDK({ pinataJWTKey: process.env.NEXT_PUBLIC_PINATA});

  const randColor1 = randomColor()
  const randColor2 = randomColor()
  const randNumber1 = randomNumber()
  const randNumber2 = randomNumber()

  const metadata = {
    "title": `GoYieldNFT #${'0'.repeat(4 - tokenId.toString().length) + tokenId}`,
    "description": "A unique GoYieldNFT representing ownership in the GoYieldNFT ecosystem. Holders have the opportunity to earn passive income and participate in the NFT marketplace revenue sharing program.",
    "attributes": [
      {
        "trait_type": "background",
        "value": randColor1
      },
      {
        "trait_type": "color",
        "value": randColor2
      },
      {
        "trait_type": "translateX",
        "value": randNumber1
      },
      {
        "trait_type": "translateY",
        "value": randNumber2
      },
    ]
  }
  const res  = await pinata.pinJSONToIPFS(metadata);
  const data: PropsMint = {
    tokenUri: res.IpfsHash,
    randColor1: randColor1,
    randColor2: randColor2,
    randNumber1: randNumber1,
    randNumber2: randNumber2,
    tokenId
  }
  return data
}