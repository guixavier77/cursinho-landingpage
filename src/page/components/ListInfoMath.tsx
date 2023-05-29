type ListProps = {
  title: string
  description: string
}

const ListInfoMath = ({ title, description }: ListProps) => {
  return (
    <ul>
      <li className="font-inter text-gray200 text-[19px] font-normal ">
        <h4 className=" text-[22px] font-semibold text-primary pb-2">
          {title}
        </h4>
        <p className="max-w-[517px]">{description}</p>
      </li>
    </ul>
  )
}

export default ListInfoMath