import { SubTitle } from '../components/Global'

import CardCarousel from '../components/CardCarousel'

const Testimonials = () => {
  return (
    <div className="center py-16 s:text-center">
      <div className="s:pb-3">
        <SubTitle text="depoimentos" />

        <h1 className="py-4 pb-16 font-nunito text-5xl font-bold text-primary t:text-4xl s:py-0 s:text-lg">
          Recomendados por
          <br />
          quem é expert no assunto
        </h1>
      </div>

      <CardCarousel />
      <div
        className="flex gap-[30px] t:flex-wrap s:flex-wrap"
        data-aos="fade-down"
      ></div>
    </div>
  )
}

export default Testimonials
