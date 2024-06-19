import React from 'react'
import { NavContainer, NavList } from './nav-bar.style.ts'
import LogoSm from '../../assets/logo-sm.png'

export const Navbar = () => {
  return (
    <NavContainer>
        <div>
            <img src={LogoSm} alt="" />
        </div>
        <NavList>
            <li>Home</li>
            <li>Receitas</li>
            <li>Cadastrar Receitas</li>
        </NavList>
    </NavContainer>
  )
}
