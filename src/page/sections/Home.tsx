import robozinho from '../../assets/img/robozinho.svg'
import meninoEstudante from '../../assets/img/meninoEstudante.png'
import ButtonSecondary from '../components/ButtonSecondary'

const Home = () => {
  return (
    <div className="bg-primary font-inter s:pb-20" id="Home">
      <div className="center mb-11 grid grid-cols-2 s:grid-cols-1 ">
        <div className="flex flex-col pt-[100px] s:items-center s:justify-center  ">
          <div className="flex flex-row items-center  pb-8 t:pb-2 s:flex-col ">
            <img src={robozinho} alt="" className="" />
            <p className="py-3 pl-5 text-xl font-bold text-secondary s:text-sm  ">
              Seja aprovado no Enem e vestibulares :){' '}
            </p>
          </div>
          <h1 className="z-10 pb-8 font-fredoka text-[65px] font-extrabold leading-[76px] text-white t:py-4 t:text-4xl s:text-center s:text-4xl">
            Você escolhe<br></br> o que aprender
            <span className="text-secondary">.</span>
          </h1>
          <p className="block max-w-[520px] pb-4 text-[19.45px] font-normal text-white t:text-base s:max-w-[250px] s:text-center s:text-xs">
            Aqui você terá toda assistência que precisa com materiais
            desenvolvido por <b>mestres e doutores em matemática</b>
          </p>

          <ButtonSecondary />
        </div>

        <div className="bg-bg-introducao bg-cover py-[80px] s:hidden">
          <img src={meninoEstudante} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
