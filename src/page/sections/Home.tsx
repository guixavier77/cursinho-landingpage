import robozinho from '../../assets/img/robozinho.svg'
import meninoEstudante from '../../assets/img/meninoEstudante.png'
import ButtonSecondary from '../components/ButtonSecondary'

const Home = () => {
  return (
    <div className="bg-primary font-inter pb-20" id="Home">
      <div className="center grid grid-cols-2 s:grid-cols-1 mb-11 ">
        <div className="pt-[100px] flex flex-col s:justify-center s:items-center  ">
          <div className="flex flex-row items-center  pb-8 t:pb-2 s:flex-col ">
            <img src={robozinho} alt="" className="" />
            <p className="font-bold text-xl text-secondary pl-5 s:text-sm py-3  ">
              Seja aprovado no Enem e vestibulares :){' '}
            </p>
          </div>
          <h1 className="text-white font-fredoka font-extrabold text-[65px] leading-[76px] pb-8 z-10 t:text-4xl t:py-4 s:text-4xl s:text-center">
            Você escolhe<br></br> o que aprender
            <span className="text-secondary">.</span>
          </h1>
          <p className="block text-white font-normal text-[19.45px] pb-4 max-w-[520px] t:text-base s:text-center s:text-xs s:max-w-[250px]">
            Aqui você terá toda assistência que precisa com materiais
            desenvolvido por <b>mestres e doutores em matemática</b>
          </p>

          <ButtonSecondary />
        </div>

        <div className="py-[80px] bg-bg-introducao bg-cover s:hidden">
          <img src={meninoEstudante} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
