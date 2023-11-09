import React, { ReactNode } from "react";

interface Props {
  children: ReactNode
  width: string
  open: boolean
}

export const Modal = ({ children, width, open }: Props) => {
  if(!open) 
    return null
  return (
    <div
      className="relative z-[1000]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
          <div className={`relative transform overflow-hidden rounded-lg bg-[#1f152b] text-left shadow-xl transition-all w-[${width}] max-w-full`}>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};
