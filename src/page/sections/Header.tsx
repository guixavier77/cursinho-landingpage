import MenuOption from '../components/MenuOption'
import logo from '../../assets/img/logo.svg'
const Header = () => {
  return (
    <div className="center flex items-center justify-between py-5">
      <img src={logo} alt="" />

      <nav className="flex items-center gap-16 t:gap-8">
        <ul className="flex gap-9 t:gap-3">
          <MenuOption title="Home" />
          <MenuOption title="Quem somos" />
          <MenuOption title="Planos" />
          <MenuOption title="Fale conosco" />
        </ul>

        <a
          href="#"
          className="bg-primary py-3 px-11 text-white rounded-md font-dmsans font-bold text-base"
        >
          Entrar
        </a>
      </nav>
    </div>
  )
}

export default Header
