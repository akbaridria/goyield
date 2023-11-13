/* eslint-disable @next/next/no-img-element */
import { NftSample } from "@/components/Icons";
import { svgToImg, trimWallet } from "@/scripts/utils";
import { useEffect, useState } from "react";
import { getImage } from "../../../../protocol-contract/GoYield/scripts/getNftImage";

interface Props {
  id: number;
  address: string;
}
export const NftComponent = ({ id, address }: Props) => {
  const [image, setImage] = useState('')
  useEffect(() => {
    const getData = async () => {
      const res = await getImage(id);
      setImage(res[2] as string)
    }

    getData()
  }, [id])
  return (
    <div className="hover:border-[1px] border-greyHalf transition-all rounded-lg bg-gray-800 shadow-md cursor-pointer">
      {/* <NftSample customClass="rounded-tl-lg rounded-tr-lg" background="#BB004B" color="#FF0066" /> */}
      <img src={svgToImg(image)} alt="goyield-nft" className="rounded-tl-lg rounded-tr-lg"  />
      <div className="p-4">
        <div className="font-bold text-xl text-xl font-bold text-transparent bg-clip-text duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100">GoYieldNFT #{'0'.repeat(4 - id.toString().length) + id}</div>
        <div className="my-2">
          <div>Owner</div>
          <div className="text-sm opacity-[0.5]">{ trimWallet(address) }</div>
        </div>
      </div>
    </div>
  )
}

export default NftComponent;