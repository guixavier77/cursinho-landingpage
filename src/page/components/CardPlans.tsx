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
      className={`font-nunito ${bg}  max-w-[570px] rounded-[18px] pb-[37.2px] pl-9 pr-[13.5px] pt-[62px] `}
    >
      <div
        className={`pt-15 relative pb-11 font-bold after:absolute after:-top-10 after:right-0 after:content-discount s:after:-top-3 s:after:content-discountMobile ${display}`}
      >
        <p className={`pb-2 text-[22px] text-[#3c5882] s:text-xs`}>
          {subtitle}
        </p>
        <h4 className={`${titleColor}  text-3xl s:text-base`}>{title}</h4>
      </div>

      <div>
        <p className="text-2xl font-bold text-blue s:text-sm">vantagens</p>
        <ul className="pl-8 pr-11 pt-8 s:pl-4 s:pt-4">
          {advantage.map((item) => {
            return (
              <li
                className={`flex items-start gap-4 pb-4 text-base s:items-center s:pb-2 s:text-[9px] ${advtextColor}`}
                key={item}
              >
                <FontAwesomeIcon icon={faCheck} />{' '}
                <span className="font-regular ">{item}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between ">
        <div>
          <p
            className={`${priceInfo} pl-9 font-nunitosans text-base text-white opacity-40 s:text-[8px]`}
          >
            de R$178,80
          </p>
          <div className="flex items-end">
            <p className="self-start pr-3 font-nunitosans text-xl font-semibold text-secondary s:text-xs">
              R$
            </p>
            <p
              className={`${textPrice} font-nunitosans text-4xl font-extrabold s:text-xl`}
            >
              {price}
            </p>
            <span
              className={`font-nunito text-base font-bold s:text-[8px]  ${textPlan}  `}
            >
              {plan}
            </span>
          </div>
          <p className={`${priceInfo} pt-3 text-white opacity-40 s:text-[8px]`}>
            Menos de 5 reais por mês :)
          </p>
        </div>

        <div className="pr-11 ">
          <a
            href=""
            className={`rounded-xl px-16 py-5 font-dmsans text-base font-bold text-white s:px-8 s:py-3 ${bgbutton}`}
          >
            Eu quero!
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardPlans
