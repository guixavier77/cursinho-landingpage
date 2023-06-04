import meninoFoguetinho from '../../assets/img/meninoFoguetinho.png'
import meninoDedoPraCima from '../../assets/img/meninoDedoPraCima.png'
import { Description, SubTitle, Title } from '../components/Global'
const AprovMath = () => {
  return (
    <div className="bg-gray100">
      <div className="center s:pt-10 pt-20 flex s:flex-wrap pb-5 ">
        <div className="s:flex s:flex-col-reverse">
          <img src={meninoFoguetinho} className="" alt="" />
          <div className="s:text-center">
            <SubTitle text="100% matemática" />
            <Title text="Matemática para quem quer entrar na facul." />
            <Description text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis." />
          </div>
        </div>

        <div className="s:flex s:flex-col s:justify-center">
          <div className="s:text-center ">
            <SubTitle text="Quer ser aprovado?" />
            <Title text="Se seu foco é ser aprovado, nós estamos aqui por você." />
            <Description text="Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis." />
          </div>
          <img src={meninoDedoPraCima} className="pb-7" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AprovMath
