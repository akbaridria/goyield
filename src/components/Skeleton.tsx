
interface Props {
  customClass: string
}
export const Skeleton = ({ customClass }: Props) => {
  return (
    <div className={`animate-pulse ${customClass}`}>
      
    </div>
  )
}

export default Skeleton;