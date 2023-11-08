'use client'

import { useState } from "react"
import { Chevron } from "./Icons"

interface Props {
  isActive: boolean,
  question: string,
  answer: string,
}

export const Accordion = ({ isActive, question, answer }: Props) => {
  const [active, setActive] = useState(isActive);

  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={() => setActive(!active)}>
        <div className="text-lg font-bold max-w-[80%]">
          {
            question
          }
        </div>
        <Chevron customClass={`w-5 h-5 ${active ? 'rotate-[270deg]' : 'rotate-[90deg]'} transition-all`} />
      </div>
      <div className={`opacity-[0.5] ${active ? 'max-h-32' : 'max-h-[0px]'} overflow-hidden transition-all`}>
        { answer }
      </div>
      <hr style={{ borderTop: '1px solid rgba(255, 255, 255, 0.25)'}} />
    </div>
  )
}