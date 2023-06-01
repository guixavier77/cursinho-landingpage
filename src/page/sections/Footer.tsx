import logo from '../../assets/img/logo-footer.svg'
import googlePlay from '../../assets/img/google-play.svg'
import appleStore from '../../assets/img/apple.svg'
type textProps = {
  text: string
}
const Title = ({ text }: textProps) => {
  return (
    <h4 className="text-primary text-xl font-inter font-medium pb-3">{text}</h4>
  )
}

const Description = ({ text }: textProps) => {
  return <p className="text-gray200 text-[17px] font-inter pb-2">{text}</p>
}

const Footer = () => {
  return (
    <div className="center mt-20">
      <div className="flex  justify-between">
        <div>
          <img src={logo} alt="" />
          <div className="flex pt-16 gap-5">
            <div className="font-inter border-[1px] border-[#D5D5DF] py-2 px-4 rounded-lg flex items-center max-w-[160px] justify-center gap-3">
              <img src={appleStore} alt="" className=" w-6 h-6" />
              <p className="text-[#4E4C7A] text-xs ">
                Disponível na
                <br />
                <b className="font-extrabold">App Store</b>
              </p>
            </div>

            <div className="font-inter border-[1px] border-[#D5D5DF] py-2 px-4 rounded-lg flex items-center max-w-[160px] justify-center gap-3">
              <img src={googlePlay} alt="" className=" w-6 h-6" />
              <p className="text-[#4E4C7A] text-xs ">
                Disponível na
                <br />
                <b className="font-extrabold">Google Play</b>
              </p>
            </div>
          </div>
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

      <div>
        <p>© Copyright 2021. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
