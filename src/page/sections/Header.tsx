import React from 'react'
import MenuOption from '../components/MenuOption'
import logo from '../../assets/img/logo.svg'
import logoMobile from '../../assets/img/logomobile.svg'
const Header = () => {
  const [active, setMode] = React.useState(false)

  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <div
      className={`center flex items-center justify-between py-5 s:py-0 ${active} ? 's:mb-[330px] '`}
    >
      <a href="">
        <img src={logo} alt="" className="s:hidden" />
        <img src={logoMobile} alt="" className="d:hidden t:hidden" />
      </a>

      <nav className="flex items-center gap-16 t:gap-8 ">
        <div
          className="hidden cursor-pointer p-3  s:block"
          onClick={ToggleMode}
        >
          <div className={`hamburguer ${active ? 'hamburguer-1' : ''}`}></div>
          <div className={`hamburguer ${active ? 'hamburguer-2' : ''}`}></div>
          <div className={`hamburguer ${active ? 'hamburguer-3' : ''}`}></div>
        </div>
        <ul
          className={`s:menuMobile flex gap-9 t:gap-3 s:gap-0 s:${
            active ? 'block animate-show-down ' : 'hidden'
          }`}
        >
          <MenuOption title="Home" />
          <MenuOption title="Quem somos" />
          <MenuOption title="Planos" />
          <MenuOption title="Fale conosco" />
        </ul>

        <a
          href="#"
          className="rounded-md bg-primary px-11 py-3 font-dmsans text-base font-bold text-white s:hidden"
        >
          Entrar
        </a>
      </nav>
    </div>
  )
}

export default Header
