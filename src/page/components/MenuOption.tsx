import { Link } from 'react-scroll'

type MenuOptionProps = {
  title: string
}

const MenuOption = ({ title }: MenuOptionProps) => {
  return (
    <li className="cursor-pointer ">
      <Link
        to={title}
        spy={true}
        offset={-100}
        smooth={true}
        duration={1000}
        className="block font-inter font-normal  text-gray200  hover:opacity-40 s:pb-6 s:text-2xl"
      >
        {title}
      </Link>
    </li>
  )
}

export default MenuOption
