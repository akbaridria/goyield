import { NftSample } from "@/components/Icons";

export const NftComponent = () => {
  return (
    <div className="hover:border-[1px] border-greyHalf transition-all rounded-lg bg-gray-800 shadow-md cursor-pointer">
      <NftSample customClass="rounded-tl-lg rounded-tr-lg" background="#BB004B" color="#FF0066" />

      <div className="p-4">
        <div className="font-bold text-xl text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">GoYieldNFT #0001</div>
        <div className="my-2">
          <div>Owner</div>
          <div className="text-sm opacity-[0.5]">LBXT3U...YG7ZXU</div>
        </div>
      </div>
    </div>
  )
}

export default NftComponent;