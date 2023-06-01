import robozinho from '../../assets/img/robozinho.svg'
import meninoEstudante from '../../assets/img/meninoEstudante.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="bg-primary font-inter">
      <div className="center grid grid-cols-2 mb-11 ">
        <div className="pt-[100px]   ">
          <div className="flex flex-row items-center  pb-8 t:pb-2">
            <img src={robozinho} alt="" />
            <p className="font-bold text-xl text-secondary pl-5  ">
              Seja aprovado no Enem e vestibulares :){' '}
            </p>
          </div>
          <h1 className="text-white font-bold text-[65px] leading-[76px] pb-8 z-10 t:text-4xl t:py-4">
            Você escolhe<br></br> o que aprender
            <span className="text-secondary">.</span>
          </h1>
          <p className="block text-white font-normal text-[19.45px] pb-4 max-w-[520px] t:text-base">
            Aqui você terá toda assistência que precisa com materiais
            desenvolvido por <b>mestres e doutores em matemática</b>
          </p>

          <a
            href=""
            className="block text-primary font-bold text-lg bg-secondary py-5 px-20 rounded-md my-2 max-w-[373.25px] t:px-4 t:max-w-[240px] t:py-3"
          >
            <span className="pr-7 t:text-base">Veja nossos planos</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="py-[80px] bg-bg-introducao bg-cover">
          <img src={meninoEstudante} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
