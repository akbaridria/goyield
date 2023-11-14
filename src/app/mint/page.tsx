'use client'

import { Button } from "@/components/Button";
import { NftSample, Spinner } from "@/components/Icons";
import { useEffect, useState } from "react";
import { mintNft, getLatestTokenId } from '../../../protocol-contract/GoYield/scripts/mint'
import { useWallet } from "@txnlab/use-wallet";
import { saveFileToIpfs } from "@/scripts/mint";
import { randomColor } from "@/scripts/utils";
import { PropsMint } from "../globalInterface";
import ModalTx from "./component/ModalTx";
import { LoadingMint } from "./interfaces/mintInterface";
import { Logo } from "@/components/Logo";

/* eslint-disable @next/next/no-img-element */
export const Mint = () => {
  const { signer, activeAddress, isActive } = useWallet();

  const [color, setColor] = useState('#BB004B');
  const [background, setBackground] = useState('#FF0066');
  const [loading, setLoading] = useState<LoadingMint>({
    loadingMetada: false,
    loadingTokenId: false,
    loadingTx: false
  });
  const [open, setOpen] = useState(false);
  const [txId, setTxId] = useState('');


  useEffect(() => {
    const interval = setInterval(() => {
      setColor(randomColor());
      setBackground(randomColor());
    }, 2000)

    return () => clearInterval(interval);
  }, [background, color])


  const submit = async () => {
    setOpen(true);
    setLoading((prevState) => ({
      ...prevState,
      loadingTokenId: true
    }))
    const tokenId = await getLatestTokenId();
    setLoading((prevState) => ({
      ...prevState,
      loadingTokenId: false
    }))
    setLoading((prevState) => ({
      ...prevState,
      loadingMetada: true
    }))
    const data: PropsMint = await saveFileToIpfs(tokenId);
    setLoading((prevState) => ({
      ...prevState,
      loadingMetada: false
    }))
    setLoading((prevState) => ({
      ...prevState,
      loadingTx: true
    }))
    const mint = await mintNft(signer, activeAddress as string, data )
    setLoading({
      loadingMetada: false,
      loadingTokenId: false,
      loadingTx: false
    })

    if(mint.length === 0){
      alert('oops something went wrong, try again!')
      setOpen(false);
    } else {
      setTxId(mint[0]);
    }
  }

  return (
    <div className="min-h-screen">
      {
        !isActive && <div className="p-2 bg-red-500 text-center">
        Wallet not connected
      </div>
      }
      <div className="w-[450px] max-w-full rounded-lg shadow-lg my-8 mx-auto border-[1px] border-greyHalf shadow-lg">
        <NftSample customClass="w-full rounded-tl-lg rounded-tr-lg transition-all" color={color} background={background} />
        <div className="p-4">
          <div className="text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
            GoYieldNFT
          </div>
          <div className="my-2 font-semibold">Price 10 $ALGO</div>
          <div className="font-semibold opacity-[0.5]">
            A unique GoYieldNFT representing ownership in the GoYieldNFT ecosystem. Holders have the opportunity to earn passive income and participate in the NFT marketplace revenue sharing program.
          </div>
        </div>
       <button onClick={submit} className={`p-4 rounded-bl-lg rounded-br-lg w-full flex items-center justify-center font-semibold ${loading.loadingMetada || loading.loadingTokenId || loading.loadingTx || !isActive ? 'pointer-events-none opacity-[0.5]': null }`} style={{ background: 'linear-gradient(58deg, #2600FC 0%, #FF00EA 100%)'}}>
        { loading.loadingMetada || loading.loadingTokenId || loading.loadingTx ? <Spinner /> : null } Mint Now 
       </button>
      </div>

      <ModalTx open={open} loading={loading} closeModal={() => setOpen(false)} txId={txId} />
    </div>
  )
}

export default Mint;