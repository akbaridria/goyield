'use client'

import Link from "next/link";
import { Logo } from "./Logo";
import datas from '@/datas/data.json';
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="border-t-[1px] border-greyHalf">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8 font-bold">
            {
              datas.menus.map((item, index) => {
                return (
                  <Link href={item.link} key={index} className={`${pathname === item.link ? 'opacity-[1]' : 'opacity-[0.5]'} hover:opacity-[1] transition-all`}>{ item.name }</Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;