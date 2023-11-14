'use client'

import { Button } from "@/components/Button";
import { Arrow } from "@/components/Icons";
import { Divider } from "./component/Divider";
import { listBenefits } from "@/utils";
import { Accordion } from "@/components/Accordion";
import datas from '@/datas/data.json';
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div>
      <section className="container mx-auto p-4 max-h-[750px]">
        <div className="grid grid-grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div>
            <div className="text-[2rem] md:text-[3.5rem] text-center md:text-left font-bold leading-tight">
              <div className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
                Hold, Earn, Prosper -{" "}
              </div>
              <div>A Gateway to Future NFT Ecosystems!</div>
            </div>
            <div className="my-4 text-[0.875rem] text-center md:text-left font-semibold">
              Unlock a new era of passive income through NFT ownership on
              Algorand. Holders enjoy seamless earnings, powered by our
              innovative yield-generating strategies. In Phase One, 50% of
              proceeds are allocated to Folk-Finance, where they accrue interest
              for the community. Randomly, three lucky NFT holders will share in
              the rewards every 100,000 rounds. As our community thrives,
              we&apos;ll venture to build an inclusive NFT marketplace, with 50%
              of revenue shared among all NFT holders. Join us and shape the
              future of ownership with GoYieldNFT!
            </div>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <Link href="/mint">
                <Button onclick={() => { }}>
                  <div className="flex items-center font-semibold">
                    Mint now
                  </div>
                </Button>
              </Link>
              <Link href="https://github.com/akbaridria/goyield#readme" target="_blank" className="flex items-center gap-1">Learn More <Arrow customClass="w-5 h-5 rotate-[315deg]" /> </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="./background.png"
              alt="abstract-goyield"
              className="w-[80%]"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="container mx-auto my-8 p-4">
        <div>
          <div className="text-[2rem] md:text-[3.5rem] text-center font-bold">
            Why{" "}
            <span className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
              Choose Us?
            </span>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {listBenefits().map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`p-8 rounded-lg border-[1px] h-fit border-[rgba(232,232,232,0.25)] ${index % 2 === 1 ? "mt-8" : null
                    }`}
                >
                  <Icon customClass="w-[2.5rem] h-[2.5rem]" />
                  <div className="text-[1.5rem] font-bold my-8">
                    {item.name}
                  </div>
                  <div className="opacity-[0.5]">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      <section className="container mx-auto p-4 my-8">
        <div>
          <div className="text-[2rem] md:text-[3.5rem] text-center font-bold">
            GoyieldNFT&apos;s{" "}
            <span className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
              Roadmap
            </span>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {datas.listRoadmap.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className="relative p-8 border-[1px] border-[rgba(232,232,232,0.25)] rounded-lg"
                >
                  <div className="text-[1.25rem] font-semibold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
                    Phase {index + 1}
                  </div>
                  <div className="my-4 text-[1.5rem] font-bold">
                    {item.name}
                  </div>
                  <div className="opacity-[0.5]">{item.description}</div>
                  <div
                    className="absolute top-0 right-0 circle-percent rounded-full w-14 h-14 leading-5"
                    style={{
                      background:
                        "linear-gradient(25deg, #2600FC 0%, #FF00EA 100%)",
                    }}
                  >
                    <div className="rotate-[45deg] text-center">
                      <div className="font-bold text-[25px]">{item.percent}</div>
                      <div className="text-[18px]">%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      <section className="container mx-auto p-4 my-8">
        <div className="text-[2rem] md:text-[3.5rem] text-center font-bold leading-tight">
          Your Questions,
          <div className="text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">
            Answered!
          </div>
        </div>

        <div className="mt-8 w-[600px] max-w-full mx-auto rounded-lg p-8 grid gap-2" style={{ border: '1px solid rgba(255, 255, 255, 0.25)' }}>
          {
            datas.questions.map((item, index) => {
              return (
                <Accordion key={index} isActive={index === 0} question={item.question} answer={item.answer} />
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
