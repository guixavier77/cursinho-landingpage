import meninoFoguetinho from '../../assets/img/meninoFoguetinho.png'
import meninoDedoPraCima from '../../assets/img/meninoDedoPraCima.png'
import { Description, SubTitle, Title } from '../components/Global'
const AprovMath = () => {
  return (
    <div className="bg-gray100">
      <div className="center pt-20 flex">
        <div className="">
          <img src={meninoFoguetinho} className="pb-10" alt="" />
          <SubTitle text="Quer ser aprovado?" />
          <Title text="Se seu foco é ser aprovado, nós estamos aqui por você." />
          <Description text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis." />
        </div>

        <div className="">
          <SubTitle text="100% matemática" />
          <Title text="Matemática para quem quer entrar na facul." />
          <Description text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis." />
          <img src={meninoDedoPraCima} className=" pb-7" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AprovMath
