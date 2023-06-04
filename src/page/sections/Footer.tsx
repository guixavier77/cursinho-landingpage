import logo from '../../assets/img/logo-footer.svg'
import AppButton from '../components/AppButton'

import Copyright from '../components/Copyright'
import ScrollToTop from '../components/ScrollToTop'

type textProps = {
  text: string
}
const Title = ({ text }: textProps) => {
  return (
    <h4 className="pb-3 font-inter text-xl font-medium text-primary t:text-lg">
      {text}
    </h4>
  )
}

const Description = ({ text }: textProps) => {
  return (
    <p className="pb-2 font-inter text-[17px] text-gray200 t:text-sm">{text}</p>
  )
}

const Footer = () => {
  return (
    <div className="center mt-20 s:flex s:flex-col s:items-center s:pb-6">
      <div className="flex  justify-between s:flex-col s:justify-center">
        <div className="pb-12">
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col s:pb-6 s:text-center">
          <Title text="Localização" />
          <Description text="Av. Brg. Faria Lima , 1422" />
          <Description text="São Paulo - SP" />
        </div>

        <div className="flex flex-col s:pb-6 s:text-center">
          <Title text="Fale Conosco" />
          <Description text="(22) 4442-0126" />
          <Description text="info@digihouse.com" />
        </div>

        <div className="flex flex-col s:pb-14 s:text-center">
          <Title text="Políticas" />
          <Description text="Direitos autorais" />
          <Description text="Termos de uso" />
          <Description text="Políticas de Privacidade" />
        </div>
      </div>
      <AppButton />

      {/* copyright */}

      <Copyright />

      <ScrollToTop />
    </div>
  )
}

export default Footer
