/* eslint-disable @next/next/no-img-element */
'use client'

import { Bars3, Chevron, Details, NftSample, RectangleGroup, User } from "@/components/Icons";
import { useState } from "react";
import datas from '../../../../protocol-contract/GoYield/data/contracts.json';

export const DetailNFT = () => {
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
                GoYieldNFT #0001
              </div>
            </div>
          </div>
          <NftSample customClass="rounded-bl-lg rounded-br-lg" background="" color="" />
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
                <div className="font-bold">black</div>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">Background</div>
                <div className="font-bold">black</div>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">Background</div>
                <div className="font-bold">black</div>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg">
                <div className="opacity-[0.5]">Background</div>
                <div className="font-bold">black</div>
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
                <div className="text-xs opacity-[0.5]">{ datas.contracts.nft.appAddress.slice(0,5) + '...' + datas.contracts.nft.appAddress.slice(-5) }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Owner</div>
                <div className="text-xs opacity-[0.5]">{ datas.contracts.nft.appAddress.slice(0,5) + '...' + datas.contracts.nft.appAddress.slice(-5) }</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Token ID</div>
                <div className="text-xs opacity-[0.5]">1</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Creator</div>
                <div className="text-xs opacity-[0.5]">{ datas.contracts.nft.appAddress.slice(0,5) + '...' + datas.contracts.nft.appAddress.slice(-5) }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNFT;
