import Stripes from './Stripes'
type IconProps = {
  iconUrl: string
}
const IconInfoMath = ({ iconUrl }: IconProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-2 border-solid border-secondary t:h-[40px] t:w-[40px]">
        <img src={iconUrl} className="" alt="" />
      </span>
      <Stripes />
    </div>
  )
}

export default IconInfoMath
