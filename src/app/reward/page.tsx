/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@/components/Button";
import { Dollar, Gift, Time, Warn } from "@/components/Icons";
import { checkInterest } from '../../../protocol-contract/GoYield/scripts/checkInterest';
import { useEffect, useState } from "react";
import { getLeftRound } from '../../../protocol-contract/GoYield/scripts/getRoundLeft'
import { useWallet } from "@txnlab/use-wallet";
import { getWinners } from '../../../protocol-contract/GoYield/scripts/getWinners'
import { getListNft } from '../../../protocol-contract/GoYield/scripts/getListNfts';
import { getWinAmount } from '../../../protocol-contract/GoYield/scripts/getWinAmount'
import { getClaimedPrize } from "../../../protocol-contract/GoYield/scripts/getClaimedPrize";


export const Reward = () => {
  const { isActive, activeAddress } = useWallet()
  const [reward, setReward] = useState(BigInt(0));
  const [balance, setBalance] = useState(BigInt(0));
  const [round, setRound] = useState(0);
  const [listWinner, setListWinner] = useState<number[]>([])
  const [tokenWinner, setTokenWiner] = useState(-1);
  const [winAmount, setWinAmount] = useState(0);
  const [isClaimed, setClaimed] = useState(false);

  useEffect(() => {
    const getReward = async () =>  {
      const dataBalance = await checkInterest()
      setReward(dataBalance.reward);
      setBalance(dataBalance.balance);

      const leftRound = await getLeftRound();
      setRound(leftRound);

      const listWinner = await getWinners();
      setListWinner(listWinner);

      const winAmount = await getWinAmount();
      setWinAmount(winAmount / 1_000_000 / 3);

      
    };

    getReward();
  }, [])

  useEffect(() => {
    if(!!activeAddress) {
      const getData = async () => {
        const res = await getListNft(activeAddress as string)
        if(res.length > 0) {
          let tokenWinner = -1;
          for(let i = 0; i < listWinner.length; i++) {
            if(res.includes(listWinner[i])) {
              tokenWinner = listWinner[i];
            }
          }
        }

        const claimedData = await getClaimedPrize();
        
        setClaimed(claimedData.includes(tokenWinner))
        setTokenWiner(tokenWinner);
      };
      
      getData();
    }
  }, [activeAddress, listWinner, tokenWinner])

  useEffect(() => {
    const interval = setInterval( async () => {
      const leftRound = await getLeftRound();
      setRound(leftRound);
    }, 4000);

    return () => clearInterval(interval)
  },[])

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="font-semibold text-[5rem]">REWARD</div>
            <div>
              <div className="text-[2rem] md:text-left text-center leading-tight tracking-[0.5rem]">{ round }</div>
              <div className="opacity-[0.5]">Rounds left till the next Draw!</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="p-6 rounded-lg border-[1px] border-greyHalf h-fit">
            { !isActive && <div className="text-red-600">Wallet not connected</div>}
            { isActive && listWinner.length === 0 && tokenWinner === -1 &&
              <div className="grid grid-cols-1 gap-4 items-center justify-center">
                <div className="flex items-center gap-2 justify-center">
                  <div className="font-bold text-xl">the raffle is still running</div>
                  <Time customClass="w-4 h-4 fill-white" />
                </div>
                <div className="flex justify-center">
                  <Button disabled={round > 0}>
                    <div className="font-bold">
                      Draw Raffle
                    </div>
                  </Button>
                </div>
              </div> 
            }
            {
              isActive && listWinner.length > 0 && tokenWinner > -1 && 
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="text-2xl font-bold">🎉 Congratulations 🎉</div>
                <div className="font-semibold opacity-[0.5]">You are one of the winner to win</div>
                <div className="text-[2.5rem] font-bold">{winAmount} ALGO</div>
                <Button onclick={() => {}}>
                  <div className="font-semibold">
                  {
                    isClaimed ? 'You have claimed the prize!' : 'Claim now'
                  }
                  </div>
                </Button>
              </div>
            }
          </div>

          <div className="p-6 rounded-lg border-[1px] border-greyHalf h-fit">
            <div className="grid gap-3">
              <div className="flex items-center justify-between text-xl">
                <div className="flex items-center gap-2">
                  <Dollar customClass="w-6 h-6" />
                  <div>Total Deposit</div>
                </div>
                <div className="font-semibold">{ Number(balance) / 1_000_000 } ALGO</div>
              </div>
              <div className="flex items-center justify-between text-xl">
                <div className="flex items-center gap-2">
                  <Gift customClass="w-6 h-6" />
                  <div>Total Earn Yield</div>
                </div>
                <div className="font-semibold flex items-center gap-1">
                  <div className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">{ Number(reward) / 1_000_000 } ALGO</div>
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