type ListProps = {
  title: string
  description: string
}

const ListInfoMath = ({ title, description }: ListProps) => {
  return (
    <ul>
      <li className="font-inter text-[19px] font-normal text-gray200 ">
        <h4 className=" pb-2 text-[22px] font-semibold text-primary t:text-base s:text-[18px]">
          {title}
        </h4>
        <p className="max-w-[517px] t:text-sm s:max-w-[300px] s:text-xs">
          {description}
        </p>
      </li>
    </ul>
  )
}

export default ListInfoMath
