import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
type CardProps = {
  bg: string
  title: string
  subtitle: string
  advantage: string[]
  advtextColor: string
  titleColor: string
  display: string
  price: string
  plan: string
  textPrice: string
  textPlan: string
  priceInfo: string
  bgbutton: string
}

const CardPlans = ({
  bg,
  title,
  subtitle,
  advantage,
  advtextColor,
  titleColor,
  display,
  price,
  plan,
  textPrice,
  textPlan,
  priceInfo,
  bgbutton,
}: CardProps) => {
  return (
    <div
      className={`font-nunito ${bg}  rounded-[18px] pt-[62px] pr-[13.5px] pl-9 pb-[37.2px] max-w-[570px] `}
    >
      <div
        className={`pt-15 font-bold pb-11 relative after:content-discount after:absolute after:right-0 after:-top-10 ${display}`}
      >
        <p className={`text-[#3c5882] text-[22px] pb-2`}>{subtitle}</p>
        <h4 className={`${titleColor}  text-3xl`}>{title}</h4>
      </div>

      <div>
        <p className="text-2xl text-blue font-bold">vantagens</p>
        <ul className="pt-8 pl-8 pr-11">
          {advantage.map((item) => {
            return (
              <li
                className={`text-base pb-4 flex gap-4 items-start ${advtextColor}`}
                key={item}
              >
                <FontAwesomeIcon icon={faCheck} />{' '}
                <span className="font-regular ">{item}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p
            className={`${priceInfo} opacity-40 text-white text-base pl-9 font-nunitosans`}
          >
            de R$178,80
          </p>
          <div className="flex items-end">
            <p className="self-start text-secondary font-nunitosans font-semibold text-xl pr-3">
              R$
            </p>
            <p
              className={`${textPrice} font-nunitosans font-extrabold text-4xl `}
            >
              {price}
            </p>
            <span className={`font-bold text-base font-nunito  ${textPlan}  `}>
              {plan}
            </span>
          </div>
          <p className={`${priceInfo} opacity-40 text-white pt-3`}>
            Menos de 5 reais por mês :)
          </p>
        </div>

        <div className="pr-11 ">
          <a
            href=""
            className={`py-5 px-16 font-dmsans text-white rounded-xl font-bold text-base ${bgbutton}`}
          >
            Eu quero!
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardPlans
