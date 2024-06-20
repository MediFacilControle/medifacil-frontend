import { NavContainer, NavList } from './nav-bar.style.ts'
import LogoSm from '../../assets/logo-sm.png'
import { Button } from '../button/button.jsx';

export const Navbar = () => {
  const isLogged = true;
  return (
    <NavContainer>
      <div>
        <a href="/home">
          <img src={LogoSm} alt="" />
        </a>
      </div>
      <NavList>
        <a href="/home">
          <li>Home</li>
        </a>
        <a href="">
          <li>Receitas</li>
        </a>
        <a href="/cadastro-receita">
          <li>Cadastrar Receitas</li>
        </a>

        {isLogged ?
          <Button
            width='120px'
            text='Sair' />
          : null}
      </NavList>
    </NavContainer>
  )
}
