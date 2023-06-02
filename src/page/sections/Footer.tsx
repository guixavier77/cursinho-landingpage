import logo from '../../assets/img/logo-footer.svg'
import AppButton from '../components/AppButton'

import Copyright from '../components/Copyright'

type textProps = {
  text: string
}
const Title = ({ text }: textProps) => {
  return (
    <h4 className="text-primary text-xl font-inter font-medium pb-3 t:text-lg">
      {text}
    </h4>
  )
}

const Description = ({ text }: textProps) => {
  return (
    <p className="text-gray200 text-[17px] font-inter pb-2 t:text-sm">{text}</p>
  )
}

const Footer = () => {
  return (
    <div className="center mt-20">
      <div className="flex  justify-between ">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col">
          <Title text="Localização" />
          <Description text="Av. Brg. Faria Lima , 1422" />
          <Description text="São Paulo - SP" />
        </div>

        <div className="flex flex-col">
          <Title text="Fale Conosco" />
          <Description text="(22) 4442-0126" />
          <Description text="info@digihouse.com" />
        </div>

        <div className="flex flex-col">
          <Title text="Políticas" />
          <Description text="Direitos autorais" />
          <Description text="Termos de uso" />
          <Description text="Políticas de Privacidade" />
        </div>
      </div>
      <AppButton />

      {/* copyright */}

      <Copyright />
    </div>
  )
}

export default Footer
