import React from 'react'

import './styles.css'
import Logo from './../../assets/img/logo.png'
//import ButtonLink from './../components/ButtonLink'
import Button from '../../components/Button'

export default function Header (){
  return(
    <header className="menu">
      <nav className="Menu">
        <a href="/">
          <img src={Logo} alt="Baflix" className="logo" />
        </a>

        <Button as="a" _label="Novo vídeo" href="#">
          Novo vídeo
        </Button>
      </nav>
    </header>
  )
}
/*<ButtonLink _style="ButtonLink" _label="Novo vídeo" _link="#">
          Novo vídeo
        </ButtonLink>*/