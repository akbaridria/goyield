import { MouseEventHandler, ReactNode } from "react"
interface Props {
  children: ReactNode,
  onclick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
}
export const Button = ({ children, onclick, disabled=false } : Props) => {
  return (
    <button 
      className={`px-4 py-2 duration-500 bg-gradient-to-r to-[#FF00EA] via-[#2600FC] from-[#FF00EA] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg ${disabled ? 'pointer-events-none opacity-[0.5]' : null }`} 
      onClick={onclick}
    >
      { children }
    </button>
  )
}