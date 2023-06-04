import phone from '../../assets/img/Phone.png'
import robozinho from '../../assets/img/robozinho.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const OurApp = () => {
  return (
    <div className="mt-28  h-[668px] bg-primary t:h-[423px] s:mt-4 s:h-[893px] ">
      <div className="center grid grid-cols-2 s:grid-cols-1 s:justify-center ">
        <div className="s:order-2 s:pt-36">
          <img className="relative -top-[88px]" src={phone} alt="" />
        </div>
        <div className="m-auto self-center s:order-1 ">
          <div className="flex items-center pb-8 s:flex-col s:pb-4 s:pt-12 ">
            <img src={robozinho} alt="" className="s:pb-5" />
            <p className="pl-5 text-xl font-bold text-secondary   t:text-base s:text-sm">
              Baixe aulas no app e estude offline{' '}
            </p>
          </div>
          <p className="block pb-4 font-inter text-[19.45px] font-normal text-white t:text-sm s:pb-12 s:text-center s:text-sm">
            Receba lembretes no seu celular e tenha a facilidade <br /> de
            estudar a qualquer hora e de qualquer lugar.
            <br /> <b>Baixe nosso app e confira.</b>
          </p>

          <a
            href=""
            className="my-2 block max-w-[373.25px] rounded-md bg-secondary px-[60px] py-5 text-lg font-bold text-primary t:max-w-[240px] t:px-4 t:py-3 s:py-3"
          >
            <span className="pr-6 t:pr-4 t:text-sm s:text-sm">
              Conheça nosso aplicativo
            </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurApp
