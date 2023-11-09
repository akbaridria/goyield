'use client'

import { Button } from "@/components/Button";

export const Reward = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-[5rem]">REWARD</div>
            <div>
              <div className="text-[2rem] leading-tight tracking-[0.5rem]">98000</div>
              <div className="opacity-[0.5]">Rounds left till the next Draw!</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-6 rounded-lg border-[1px] border-greyHalf">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="text-2xl font-bold">🎉 Congratulations 🎉</div>
              <div className="font-semibold opacity-[0.5]">You are one of the winner to win</div>
              <div className="text-[2.5rem] font-bold">3,000 ALGO</div>
              <Button onclick={() => {}}>
                Claim now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reward;