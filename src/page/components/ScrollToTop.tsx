import { Link } from 'react-scroll'
import arrowUp from '../../assets/img/arrow-up-fill.svg'

const ScrollToTop = () => {
  return (
    <div className="fixed grid bg-primary bottom-5 right-[10px] w-[60px] h-[60px] place-items-center rounded-full shadow-md cursor-pointer z-[2000] progress s:hidden">
      <Link
        to="Home"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
        className=" bg-bgsecondary rounded-full grid place-items-center text-2xl text-[#ffff] progress-value"
      >
        <img src={arrowUp} alt="" />
      </Link>
    </div>
  )
}

export default ScrollToTop
