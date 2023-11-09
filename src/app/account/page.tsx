/* eslint-disable @next/next/no-img-element */
import { User } from "@/components/Icons";
import NftComponent from "./components/NftComponent";

export const Account = () => {
  const a = [1,3,4,56,6,78,89,9,90,9,9,9,9];
  return (
    <div className="min-h-screen">
      <div className="bg-black border-b-[1px] border-greyHalf h-40">
        <div className="container mx-auto flex relative h-full">
          <div className="h-32 w-32 rounded-full bg-primary flex items-center justify-center border-[1px] border-greyHalf absolute -bottom-16 left-[1rem]">
            <User customClass="w-12 h-12" />
          </div>
        </div>
      </div>

      <div className="mt-16 container mx-auto p-4">
        <div>
          <div className="text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">Unknown</div>
          <div className="flex items-center gap-2 my-2">
            <img src="/algorand-logo.png" alt="algorand-logo" className="border-[1px] border-greyHalf rounded-full bg-white w-4 h-4" />
            <div>LBXT3U...YG7ZXU</div>
          </div>
          <div className="text-sm opacity-[0.5]">30 GoYieldNFT Owned</div>
        </div>
        <hr className="border-t-[1px] border-t-greyHalf my-6" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {
          a.map((item) => {
            return (
              <a  key={item} href="/account/123">
                <NftComponent />
              </a>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Account;