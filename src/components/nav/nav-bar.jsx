import React from 'react'
import { NavContainer, NavList } from './nav-bar.style.ts'
import LogoSm from '../../assets/logo-sm.png'

export const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <a href="/home">
          <img src={LogoSm} alt="" />
        </a>
      </div>
      <NavList>
        <li>Home</li>
        <li>Receitas</li>
        <li>Cadastrar Receitas</li>
      </NavList>
    </NavContainer>
  )
}
