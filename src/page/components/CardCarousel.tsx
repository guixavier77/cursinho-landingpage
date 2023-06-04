import CardTestimonial from './CardTestimonial'
import user from '../../assets/img/avaliador1.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1140 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1139, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
}

const CardCarousel = () => {
  return (
    <div className="py-3">
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows
        containerClass="carousel-container"
      >
        <CardTestimonial
          user="Guilherme"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />

        <CardTestimonial
          user="Xavier"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />

        <CardTestimonial
          user="Martins"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />
      </Carousel>
    </div>
  )
}

export default CardCarousel
