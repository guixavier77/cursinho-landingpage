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
    <div className="pt-16">
      <div className="center flex ">
        <div className=" flex flex-col gap-4 ">
          <div className="flex flex-row gap-3 pr-11 ">
            <IconInfoMath iconUrl={tablerMath} />
            <ListInfoMath
              title="100% focado na Matemática"
              description="Todo material é construído por profissionais
              especializados e com foco no perfil de
              cada vestibular.
              "
            />
          </div>
          <div className="flex flex-row  gap-3 pr-11">
            <IconInfoMath iconUrl={carbon} />
            <ListInfoMath
              title="Acompanhamento de perto!"
              description="Todo o suporte que você precisa para
              aprender o conteúdo dos principais vestibulares!
              
              "
            />
          </div>
          <div className="flex flex-row gap-3 pr-11">
            <IconInfoMath iconUrl={mathCompass} />
            <ListInfoMath
              title="Matemática de um jeito fácil!"
              description="Resolução instantânea de qualquer equação
              algébrica na plataforma, além de vídeos, apostilas, simulados e central de dúvidas 24h!"
            />
          </div>

          <a
            href=""
            className="block font-dmsans text-white font-bold text-lg bg-primary py-5 px-12 rounded-md my-2 max-w-[313px] t:text-base t:px-8 t:max-w-[260px]"
          >
            <span className="pr-5">Quero ser aprovado</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div>
          {/* aqui tem slide */}
          <img src={universitariaImg} alt="" />
          <img src={doisUniversitarios} alt="" className="hidden" />
        </div>
      </div>
    </div>
  )
}

export default infoMath
