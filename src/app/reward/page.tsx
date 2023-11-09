/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@/components/Button";
import { Dollar, Gift, Warn } from "@/components/Icons";

export const Reward = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="font-semibold text-[5rem]">REWARD</div>
            <div>
              <div className="text-[2rem] md:text-left text-center leading-tight tracking-[0.5rem]">98000</div>
              <div className="opacity-[0.5]">Rounds left till the next Draw!</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="p-6 rounded-lg border-[1px] border-greyHalf">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="text-2xl font-bold">🎉 Congratulations 🎉</div>
              <div className="font-semibold opacity-[0.5]">You are one of the winner to win</div>
              <div className="text-[2.5rem] font-bold">3,000 ALGO</div>
              <Button onclick={() => {}}>
                <div className="font-semibold">Claim now</div>
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-lg border-[1px] border-greyHalf h-fit">
            <div className="grid gap-3">
              <div className="flex items-center justify-between text-xl">
                <div className="flex items-center gap-2">
                  <Dollar customClass="w-6 h-6" />
                  <div>Total Deposit</div>
                </div>
                <div className="font-semibold">1,300 ALGO</div>
              </div>
              <div className="flex items-center justify-between text-xl">
                <div className="flex items-center gap-2">
                  <Gift customClass="w-6 h-6" />
                  <div>Total Earn Yield</div>
                </div>
                <div className="font-semibold flex items-center gap-1">
                  <div className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">0.003 ALGO</div>
                  <Warn customClass="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xl">
                <div>Yield Source</div>
                <div className="flex items-center gap-2 font-semibold">
                  <img src="/folk-finance-logo.webp" alt="folks-finance-goyield" className="w-[25px] h-[25px]" />
                  <div>Folks Finance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reward;