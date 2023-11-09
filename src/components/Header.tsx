/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "./Button";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import datas from '@/datas/data.json';
import { Hamburger, XMark } from "./Icons";
import { MouseEventHandler, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { useWallet } from '@txnlab/use-wallet'


interface PropsMenuMobile {
  isActive: boolean;
  changeActive: MouseEventHandler
  onclick: MouseEventHandler<HTMLButtonElement>
}
const MenuMobile = ({ isActive, changeActive, onclick }: PropsMenuMobile) => {
  const pathname = usePathname();
  return (
    <div className={`fixed top-0 ${isActive ? 'right-0' : 'right-[-100%]'} w-full h-full bg-[#1f152b] transition-all duration-300`}>
      <div className="flex items-center justify-between p-8">
        <Link href="/">
          <Logo />
        </Link>
        <div onClick={changeActive}>
          <XMark customClass="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="grid font-bold text-lg">
        {
          datas.menus.map((item, index) => {
            return (
              <div key={index}  className={`border-t border-greyHalf px-8 py-4 last:border-b last:border-greyHalf ${pathname === item.link ? 'opacity-[1]' : 'opacity-[0.5]'}`}>
                <Link href={item.link} onClick={changeActive}>{item.name}</Link>
              </div>
            )
          })
        }
      </div>
      <div className="flex items-center justify-center mt-8">
        <Button onclick={onclick}>
          <div>Connect Wallet</div>
        </Button>
      </div>
    </div>
  )
}
export const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { providers, activeAccount } = useWallet();
  const [isConnected, setConnect] = useState(false);

  useEffect(() => {
    setConnect(!!activeAccount);
  }, [activeAccount])

  return (
    <div className="border-b-[1px] border-[rgba(131,131,131,0.25)] sticky top-0 z-[100] bg-[#1F152B] shadow-md">
      <div className="flex items-center justify-between p-4 container mx-auto font-bold">
        <Logo />
        <div className="hidden sm:flex items-center gap-8">
          {
            datas.menus.map((item, index) => {
              return (
                <Link key={index} href={item.link} className={`${pathname === item.link ? 'opacity-[1]' : null} opacity-[0.5] hover:opacity-[1] transition-all`}>{item.name}</Link>
              )
            })
          }
        </div>
        {
          !isConnected && <div className="hidden sm:block" onClick={() => setOpenModal(true)}>
          <Button onclick={() => setOpenModal(true)}>Connect Wallet</Button>
        </div>
        }
        <div className="block sm:hidden cursor-pointer" onClick={() => setActive(true)}>
          <Hamburger customClass="w-6 h-6" />
        </div>
        {
          isConnected && <div className="flex items-center gap-2 hidden md:flex">
          Connected <span className="block w-4 h-4 bg-green-600 rounded-full"></span>
        </div>
        }
        <MenuMobile onclick={() => setOpenModal(true)} isActive={active} changeActive={() => setActive(false)} />
      </div>

      {/* modal  */}
      <Modal width="450px" open={openModal}>
        <div className=''>
          <div className='text-center p-6'>
            <div className='text-lg font-bold'>Connect Your Wallet</div>
            <div className='opacity-[0.5] font-semibold'>If you don&apos;t have a wallet, you can select a provider and create one now.</div>
          </div>
          <hr className='border-t-[1px] border-greyHalf' />
          <div>
            {providers?.map((item, index) => {
              return (
                <div key={index} className="px-6 py-4 flex items-center gap-4 hover:bg-[#2600FC] transition-all cursor-pointer" onClick={item.connect}>
                  <img src={item.metadata.icon} alt={item.metadata.name} width={30} height={30} className="rounded-full" />
                  <div>{item.metadata.name}</div>
                </div>
              )
            })}
          </div>
          <hr className='border-t-[1px] border-greyHalf' />
          <button className="w-full p-4 hover:bg-[#FF00EA] transition-all font-bold" onClick={(e) => setOpenModal(false)}>
            Close
          </button>
        </div>
      </Modal>
      {/* end modal  */}
    </div>
  );
};

export default Header;
