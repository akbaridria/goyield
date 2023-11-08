'use client'

import { Button } from "./Button";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import datas from '@/datas/data.json';
import { Hamburger, XMark } from "./Icons";

const MenuMobile = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-[#1f152b] p-8">
      <div className="flex items-center justify-between">
        <Logo />
        <XMark customClass="w-6 h-6" />
      </div>
    </div>
  )
}
export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="border-b-[1px] border-[rgba(131,131,131,0.25)] sticky top-0 z-[100] bg-[#1F152B] shadow-md">
      <div className="flex items-center justify-between p-4 container mx-auto font-bold">
        <Logo />
        <div className="hidden sm:flex items-center gap-8">
          {
            datas.menus.map((item, index) => {
              return (
                <Link key={index} href={item.link} className={`${pathname === item.link ? 'opacity-[1]' : null} opacity-[0.5] hover:opacity-[1] transition-all`}>{ item.name }</Link>
              )
            })
          }
        </div>
        <div className="hidden sm:block">
          <Button>Connect Wallet</Button>
        </div>
        <div className="block sm:hidden">
          <Hamburger customClass="w-6 h-6" />
        </div>
        <MenuMobile />
      </div>
    </div>
  );
};

export default Header;
