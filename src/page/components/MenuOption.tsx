import { Link } from 'react-scroll';

type MenuOptionProps = {
  title: string;
};

const MenuOption = ({ title }: MenuOptionProps) => {
  return (
    <li className='cursor-pointer'>
      <Link
        to={title}
        spy={true}
        offset={-100}
        smooth={true}
        duration={1000}
        className='block text-gray200 font-inter font-400 '
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuOption;
