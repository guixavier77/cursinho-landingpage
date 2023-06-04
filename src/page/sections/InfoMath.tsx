import universitariaImg from '../../assets/img/universitaria.jpg'
import doisUniversitarios from '../../assets/img/doisUniversitarios.jpg'
import ListInfoMath from '../components/ListInfoMath'
import IconInfoMath from '../components/IconInfoMath'
import tablerMath from '../../assets/img/tabler_math.svg'
import carbon from '../../assets/img/carbon_workspace.svg'
import mathCompass from '../../assets/img/mdi_math-compass.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const infoMath = () => {
  return (
    <div className="pt-16 s:mb-5">
      <div className="center flex s:justify-center">
        <div className=" flex flex-col gap-4 s:gap-7 " data-aos="fade-down">
          <div className="flex flex-row gap-3 pr-11 s:flex-col s:pr-0 s:text-center ">
            <IconInfoMath iconUrl={tablerMath} />
            <ListInfoMath
              title="100% focado na Matemática"
              description="Todo material é construído por profissionais
              especializados e com foco no perfil de
              cada vestibular.
              "
            />
          </div>
          <div className="flex flex-row  gap-3 pr-11 s:flex-col s:pr-0 s:text-center">
            <IconInfoMath iconUrl={carbon} />
            <ListInfoMath
              title="Acompanhamento de perto!"
              description="Todo o suporte que você precisa para
              aprender o conteúdo dos principais vestibulares!
              
              "
            />
          </div>
          <div className="flex flex-row gap-3 pr-11 s:flex-col s:pr-0 s:text-center">
            <IconInfoMath iconUrl={mathCompass} />
            <ListInfoMath
              title="Matemática de um jeito fácil!"
              description="Resolução instantânea de qualquer equação
              algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!"
            />
          </div>

          <a
            href=""
            className="my-2 block max-w-[313px] rounded-md bg-primary px-12 py-5 font-dmsans text-lg font-bold text-white t:max-w-[260px] t:px-8 t:text-base "
          >
            <span className="pr-5">Quero ser aprovado</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="s:hidden" data-aos="fade-down">
          {/* aqui tem slide */}
          <img src={universitariaImg} alt="" />
          <img src={doisUniversitarios} alt="" className="hidden" />
        </div>
      </div>
    </div>
  )
}

export default infoMath
