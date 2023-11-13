/* eslint-disable @next/next/no-img-element */
'use client'

import { Bars3, Chevron, Details, NftSample, RectangleGroup, User } from "@/components/Icons";
import { useEffect, useState } from "react";
import datas from '../../../../protocol-contract/GoYield/data/contracts.json';
import { useParams } from "next/navigation";
import { getNameTokenId, svgToImg, trimWallet } from "@/scripts/utils";
import { getImage } from "../../../../protocol-contract/GoYield/scripts/getNftImage";
import useSWR from "swr";
import { fetcher } from "@/scripts/utils";
import algosdk from "algosdk";
import Skeleton from "@/components/Skeleton";

interface PropsTrait {
  background: string
  color: string,
  translateX: number,
  translateY: number
}

export const DetailNFT = () => {
  const params = useParams()
  const [image, setImage] = useState('');
  const [cid, setCid] = useState('')
  const [owner, setOwner] = useState('')
  const [traits, setTraits] = useState<PropsTrait>({
    background: '',
    color: '',
    translateX: 0,
    translateY: 0,
  })

  const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_GATEWAY_PINATA + '/' + cid}`, fetcher)

  useEffect(() => {
    const getData = async () => {
      const detail: algosdk.ABIValue[] = await getImage(Number(params.id));
      console.log(detail)
      setImage(detail[2] as string);
      setCid(detail[1] as string);
      setOwner(detail[0] as string);

      if (!!data?.attributes) {
        setTraits({
          background: data.attributes[0].value,
          color: data.attributes[1].value,
          translateX: data.attributes[2].value,
          translateY: data.attributes[3].value
        })
      }
    }

    getData()
  }, [params.id, data])

  console.log(data, isLoading, error)
  return (
    <div className="container mx-auto p-4 min-h-screen mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-800 shadow-md">
          <div>
            <div className="flex items-center gap-2 m-4">
              <img
                src="/algorand-logo.png"
                alt="algorand-logo"
                className="border-[1px] border-greyHalf rounded-full bg-white w-4 h-4"
              />
              <div className="font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
                GoYieldNFT #{ getNameTokenId(Number(params.id)) }
              </div>
            </div>
          </div>
          <img src={svgToImg(image)} className="rounded-bl-lg rounded-br-lg" alt={`GoYieldNft`} />

          {/* <NftSample customClass="rounded-bl-lg rounded-br-lg" background="" color="" /> */}
        </div>
        <div className="bg-gray-800 rounded-lg h-fit shadow-md">
          <div className="p-4 cursor-pointer rounded-tl-lg rounded-tr-lg border-b-[1px] border-greyHalf">
            <div className="flex items-center justify-between">
              <div className="font-semibold flex items-center gap-2">
                <Bars3 customClass="w-4 h-4" />
                <div>Description</div>
              </div>
            </div>
          </div>
          <div className={``}>
            <div className="p-4 opacity-[0.5]">
              A unique GoYieldNFT representing ownership in the GoYieldNFT ecosystem. 
              Holders have the opportunity to earn passive income and participate in the NFT marketplace revenue sharing program.
            </div>
          </div>
          <div className="py-6 px-4 font-bold border-b-[1px] border-b-greyHalf">
            <span className="text-sm font-semibold opacity-[0.5]">By</span> GoYieldNFT
          </div>
          <div className="p-4 cursor-pointer rounded-tl-lg rounded-tr-lg border-b-[1px] border-greyHalf">
            <div className="flex items-center justify-between">
              <div className="font-semibold flex items-center gap-2">
                <RectangleGroup customClass="w-4 h-4" />
                <div>Traits</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">Background</div>
                {
                  isLoading ? 
                  <Skeleton customClass="h-6 w-[50%] bg-slate-500 rounded-lg" />
                  :
                  <div className="font-bold">{ traits.background }</div>
                }
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">Color</div>
                {
                  isLoading ? 
                  <Skeleton customClass="h-6 w-[50%] bg-slate-500 rounded-lg" />
                  :
                  <div className="font-bold">{ traits.color }</div>
                }
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">TranslateX</div>
                {
                  isLoading ? 
                  <Skeleton customClass="h-6 w-[50%] bg-slate-500 rounded-lg" />
                  :
                  <div className="font-bold">{ traits.translateX }</div>
                }
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">TranslateY</div>
                {
                  isLoading ? 
                  <Skeleton customClass="h-6 w-[50%] bg-slate-500 rounded-lg" />
                  :
                  <div className="font-bold">{ traits.translateY }</div>
                }
              </div>
            </div>
          </div>
          <div className="p-4 cursor-pointer border-t-[1px] border-greyHalf">
            <div className="flex items-center justify-between">
              <div className="font-semibold flex items-center gap-2">
                <Details customClass="w-4 h-4" />
                <div>Details</div>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-greyHalf">
            <div className="p-4 grid gap-2 text-sm">
              <div className="flex items-center justify-between">
                <div>App ID</div>
                <div className="text-xs opacity-[0.5]">{ datas.contracts.nft.appId }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>App Address</div>
                <div className="text-xs opacity-[0.5]">{ trimWallet(datas.contracts.nft.appAddress) }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Owner</div>
                <div className="text-xs opacity-[0.5]">{ trimWallet(owner) }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Token ID</div>
                <div className="text-xs opacity-[0.5]">#{ getNameTokenId(Number(params.id)) }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Creator</div>
                <div className="text-xs opacity-[0.5]">{ trimWallet(datas.creatorAddress) }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNFT;
