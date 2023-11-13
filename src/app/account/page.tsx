'use client'

/* eslint-disable @next/next/no-img-element */
import { User } from "@/components/Icons";
import NftComponent from "./components/NftComponent";
import { useEffect, useState } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { trimWallet } from "@/scripts/utils";
import { getListNft } from "../../../protocol-contract/GoYield/scripts/getListNfts";
import { SkeletonNftComponent } from "./components/SkeletonNftComponent";

export const Account = () => {
  const { activeAddress, isActive } = useWallet()
  const [listNfts, setListNfts] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const a = Array.from({ length: 10 }, (_, index) => index + 1);

  useEffect(() => {
    if(!!activeAddress) {
      const getData = async () => {
        setLoading(true)
        const res = await getListNft(activeAddress);
        setListNfts(res);
        setLoading(false)
      }

      getData()
    }
  }, [activeAddress])

  return (
    <div className="min-h-screen">
      {
        !isActive && <div className="p-2 bg-red-500 text-center">
          Wallet not connected
        </div>
      }
      <div className="bg-black border-b-[1px] border-greyHalf h-40">
        <div className="container mx-auto flex relative h-full">
          <div className="h-40 w-40 rounded-full bg-primary flex items-center justify-center border-[1px] border-greyHalf absolute -bottom-16 left-[1rem]">
            <User customClass="w-16 h-16 stroke-greyHalf" />
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto p-4">
        {
          !!activeAddress && 
          <>
            <div>
              <div className="text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">Unknown</div>
              <div className="flex items-center gap-2 my-2">
                <img src="/algorand-logo.png" alt="algorand-logo" className="border-[1px] border-greyHalf rounded-full bg-white w-4 h-4" />
                <div>{ trimWallet(activeAddress as string) }</div>
              </div>
              <div className="text-sm opacity-[0.5]">{ listNfts.length } GoYieldNFT Owned</div>
            </div>
            <hr className="border-t-[1px] border-t-greyHalf my-6" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
              loading ?
              a.map((item) => {
                return (
                    <SkeletonNftComponent key={item} />
                )
              }) 
              : 
              listNfts.map((item) => {
                return (
                  <a  key={item} href={`/account/${item}`}>
                    <NftComponent id={item} address={activeAddress} />
                  </a>
                )
              })
            }
            </div>
          </>
          
        }
        
      </div>
    </div>
  )
}

export default Account;