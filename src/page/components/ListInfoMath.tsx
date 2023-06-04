type ListProps = {
  title: string
  description: string
}

const ListInfoMath = ({ title, description }: ListProps) => {
  return (
    <ul>
      <li className="font-inter text-gray200 text-[19px] font-normal ">
        <h4 className=" text-[22px] font-semibold text-primary pb-2 t:text-base s:text-[18px]">
          {title}
        </h4>
        <p className="max-w-[517px] t:text-sm s:text-xs s:max-w-[300px]">
          {description}
        </p>
      </li>
    </ul>
  )
}

export default ListInfoMath
