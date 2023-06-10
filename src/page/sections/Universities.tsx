import University from '../components/University'
import enemLogo from '../../assets/img/universities/enem.png'
import pucLogo from '../../assets/img/universities/pucsp.png'
import fgvLogo from '../../assets/img/universities/fgv.png'
import unespLogo from '../../assets/img/universities/unesp.png'
import unicampLogo from '../../assets/img/universities/unicamp.png'
import einsteinLogo from '../../assets/img/universities/einstein.png'
import fuvestLogo from '../../assets/img/universities/fuvest.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1140 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1139, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
}

const Universities = () => {
  return (
    <div className="center ">
      <Carousel
        responsive={responsive}
        itemClass="flex justify-center items-center  "
        infinite={true}
        autoPlay
        autoPlaySpeed={1000}
        slidesToSlide={1}
        arrows={false}
      >
        <University logo={enemLogo} />
        <University logo={pucLogo} />
        <University logo={fgvLogo} />
        <University logo={unespLogo} />
        <University logo={unicampLogo} />
        <University logo={einsteinLogo} />
        <University logo={fuvestLogo} />
      </Carousel>
    </div>
  )
}

export default Universities
