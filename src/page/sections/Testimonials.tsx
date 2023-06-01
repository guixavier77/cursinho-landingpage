import CardTestimonial from '../components/CardTestimonial'
import { SubTitle } from '../components/Global'
import user from '../../assets/img/avaliador1.png'

const Testimonials = () => {
  return (
    <div className="center py-16">
      <SubTitle text="depoimentos" />

      <h1 className="font-nunito text-primary text-5xl font-bold py-4 t:text-4xl pb-16">
        Recomendados por
        <br />
        quem é expert no assunto
      </h1>

      <div className="flex gap-[30px] t:flex-wrap">
        <CardTestimonial
          user="Guilherme"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />

        <CardTestimonial
          user="Guilherme"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />

        <CardTestimonial
          user="Guilherme"
          userFunction="Desenvolvedor web"
          userTestimonial="Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus."
          userRating={user}
        />
      </div>
    </div>
  )
}

export default Testimonials
