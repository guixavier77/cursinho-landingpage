import phone from '../../assets/img/Phone.png'
import robozinho from '../../assets/img/robozinho.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const OurApp = () => {
  return (
    <div className="bg-primary  mt-28 s:mt-4 h-[668px] t:h-[423px] s:h-[893px] ">
      <div className="center grid grid-cols-2 s:grid-cols-1 s:justify-center ">
        <div className="s:order-2 s:pt-36">
          <img className="relative -top-[88px]" src={phone} alt="" />
        </div>
        <div className="s:order-1 self-center m-auto ">
          <div className="flex items-center pb-8 s:pb-4 s:flex-col s:pt-12 ">
            <img src={robozinho} alt="" className="s:pb-5"/>
            <p className="font-bold text-xl text-secondary pl-5   t:text-base s:text-sm">
              Baixe aulas no app e estude offline{' '}
            </p>
          </div>
          <p className="block font-inter text-white font-normal text-[19.45px] pb-4 t:text-sm s:text-center s:text-sm s:pb-12">
            Receba lembretes no seu celular e tenha a facilidade <br /> de
            estudar a qualquer hora e de qualquer lugar.
            <br /> <b>Baixe nosso app e confira.</b>
          </p>

          <a
            href=""
            className="block text-primary font-bold text-lg bg-secondary py-5 px-[60px] rounded-md my-2 max-w-[373.25px] t:px-4 t:max-w-[240px] t:py-3 s:py-3"
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
