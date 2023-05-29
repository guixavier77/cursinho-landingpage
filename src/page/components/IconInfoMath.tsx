import Stripes from './Stripes'
type IconProps = {
  iconUrl: string
}
const IconInfoMath = ({ iconUrl }: IconProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="flex items-center justify-center w-[68px] h-[68px] rounded-full border-secondary border-solid border-2">
        <img src={iconUrl} className="" alt="" />
      </span>
      <Stripes />
    </div>
  )
}

export default IconInfoMath
