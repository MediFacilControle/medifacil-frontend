import { NavContainer, NavList } from './nav-bar.style.ts'
import LogoSm from '../../assets/logo-sm.png'
import { Button } from '../button/button.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../assets/api/context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { isLogged, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div>
        <a onClick={() => navigate('/home')}>
          <img src={LogoSm} alt="" />
        </a>
      </div>
      <NavList>
        <a onClick={() => navigate('/home')}>
          <li>Home</li>
        </a>
        <a onClick={() => navigate('/receitas')}>
          <li>Receitas</li>
        </a>
        <a onClick={() => navigate('/cadastro-receita')}>
          <li>Cadastrar Receitas</li>
        </a>

        {isLogged ?
          <Button
            onClick={Logout}
            width='120px'
            text='Sair' />
          : null}
      </NavList>
    </NavContainer>
  )
}
