'use client'

import { Button } from "@/components/Button";
import { NftSample } from "@/components/Icons";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Mint = () => {
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('');

  const randomColor = () => "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(randomColor());
      setBackground(randomColor());
      console.log(color, background)
    }, 2000)

    return () => clearInterval(interval);
  }, [background, color])
  return (
    <div className="min-h-screen">
      <div className="w-[450px] max-w-full rounded-lg shadow-lg my-8 mx-auto border-[1px] border-greyHalf shadow-lg">
        <NftSample customClass="w-full rounded-tl-lg rounded-tr-lg transition-all" color={color} background={background} />
        <div className="p-4">
          <div className="text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
            GoYieldNFT
          </div>
          <div className="font-semibold opacity-[0.5]">
            A unique GoYieldNFT representing ownership in the GoYieldNFT ecosystem. Holders have the opportunity to earn passive income and participate in the NFT marketplace revenue sharing program.
          </div>
        </div>
       <button className="p-4 rounded-bl-lg rounded-br-lg w-full font-semibold" style={{ background: 'linear-gradient(58deg, #2600FC 0%, #FF00EA 100%)'}}>
        Mint Now
       </button>
      </div>
    </div>
  )
}

export default Mint;