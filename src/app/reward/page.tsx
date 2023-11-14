/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@/components/Button";
import { Dollar, Gift, Spinner, Time, Warn } from "@/components/Icons";
import { checkInterest } from '../../../protocol-contract/GoYield/scripts/checkInterest';
import { useEffect, useMemo, useState } from "react";
import { getLeftRound } from '../../../protocol-contract/GoYield/scripts/getRoundLeft'
import { useWallet } from "@txnlab/use-wallet";
import { getWinners } from '../../../protocol-contract/GoYield/scripts/getWinners'
import { getListNft } from '../../../protocol-contract/GoYield/scripts/getListNfts';
import { getWinAmount } from '../../../protocol-contract/GoYield/scripts/getWinAmount'
import { getClaimedPrize } from "../../../protocol-contract/GoYield/scripts/getClaimedPrize";
import { draw } from "../../../protocol-contract/GoYield/scripts/draw";
import { getNameTokenId } from "@/scripts/utils";
import { claim } from "../../../protocol-contract/GoYield/scripts/claim";
import ModalSuccessTx from "./components/ModalSuccessTx";

export default function Reward() {
  const { isActive, activeAddress, signer } = useWallet()
  const [reward, setReward] = useState(BigInt(0));
  const [balance, setBalance] = useState(BigInt(0));
  const [round, setRound] = useState(0);
  const [listWinner, setListWinner] = useState<number[]>([])
  const [tokenWinner, setTokenWiner] = useState(-1);
  const [winAmount, setWinAmount] = useState(0);
  const [isClaimed, setClaimed] = useState(false);
  const [listNft, setListNft] = useState<number[]>([])
  const [loading, setLoading] = useState(false);
  const [openModal, setModal] = useState(false);
  const [txId, setTxId] = useState('');

  useEffect(() => {
    const getReward = async () =>  {
      const dataBalance = await checkInterest()
      setReward(dataBalance.reward);
      setBalance(dataBalance.balance);
      
      const listWinner = await getWinners();
      setListWinner(listWinner);

      const winAmount = await getWinAmount();
      setWinAmount(winAmount / 3);

      const leftRound = await getLeftRound();
      setRound(leftRound);
      
    };
    getReward();
  }, [])

  useEffect(() => {
    if(!!activeAddress) {
      const getData = async () => {
        const res = await getListNft(activeAddress)
        setListNft(res);
      }

      getData()
    }
  }, [activeAddress])

  useEffect(() => {
    if(listNft.length > 0) {
      for(let i = 0; i < listWinner.length; i++) {
        if(listNft.includes(Number(listWinner[i]))) {
          setTokenWiner(Number(listWinner[i]))
          break
        }
      }
    }
  }, [listNft, listWinner])

  useEffect(() => {
    const getData = async () => {
      const claimedData = await getClaimedPrize();
      setClaimed(claimedData.includes(tokenWinner))
      setTokenWiner(tokenWinner);
    }

    getData(); 
  }, [tokenWinner])

  useEffect(() => {
    const interval = setInterval( async () => {
      const leftRound = await getLeftRound();
      setRound(leftRound);
    }, 4000);

    return () => clearInterval(interval)
  },[])

  const drawRaffle = async () => {
    const d = await draw(signer, activeAddress as string)
    console.log(d)
  }

  const claimReward = async () => {
    if(!isClaimed) {
      setLoading(true)
      const txIds = await claim(signer, activeAddress as string, tokenWinner, winAmount)
      setTxId(txIds[1]);
      setModal(true);
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen mb-16">
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
            { isActive && tokenWinner === -1 &&
              <div className="grid grid-cols-1 gap-4 items-center justify-center">
                <div className="flex items-center gap-2 justify-center">
                  <div className="font-bold text-xl">the raffle is still running</div>
                  <Time customClass="w-4 h-4 fill-white" />
                </div>
                <div className="flex justify-center">
                  <Button onclick={drawRaffle} disabled={round > 0}>
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
                <div className="text-[2.5rem] font-bold">{winAmount / 1_000_000} ALGO</div>
                <Button onclick={claimReward} disabled={loading || isClaimed}>
                  <div className="font-semibold flex items-center justify-center">
                    {
                      loading && <Spinner />
                    }
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
              {
                listWinner.length > 0 &&
                <div className="flex items-center justify-between text-xl">
                  <div>The Winners</div>
                  <div className="flex items-center flex-col md:flex-row gap-2 font-semibold">
                  {
                    listWinner.map((item, index) => {
                      return (
                        <div key={index}>
                          #{ getNameTokenId(item) } { index === listWinner.length - 1 ? null : ', '}
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/* start modal  */}
      <ModalSuccessTx open={openModal} closeModal={() => setModal(false)} txId={txId} />
      {/* end modal  */}
    </div>
  )
}