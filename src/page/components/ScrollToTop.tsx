import { Link } from 'react-scroll'
import arrowUp from '../../assets/img/arrow-up-fill.svg'

const ScrollToTop = () => {
  return (
    <div
      className={
        'fixed bottom-5 right-[10px] z-[2000] grid h-[60px] w-[60px] cursor-pointer place-items-center rounded-full bg-primary shadow-md s:static'
      }
    >
      <Link
        to="Home"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
        className=" bg-bgsecondary progress-value grid place-items-center rounded-full text-2xl text-[#ffff]"
      >
        <img src={arrowUp} alt="" />
      </Link>
    </div>
  )
}

export default ScrollToTop
