import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ButtonSecondary = () => {
  return (
    <a
      href=""
      className="block text-primary font-bold text-lg bg-secondary py-5 px-20 rounded-md my-2 max-w-[373.25px] t:px-4 t:max-w-[240px] t:py-3 s:px-10 s:py-2 s:mt-9"
    >
      <span className="pr-7 t:text-base s:text-sm">Veja nossos planos</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  )
}

export default ButtonSecondary
