import { CardPacienteButtons, CardPacienteContainer, CardPacienteInfo } from './card-paciente.style.ts'
import { Button } from '../button/button.jsx'
import PropTypes from 'prop-types'
import { useFetchClientRecipes } from '../../hooks/useFetchClientRecipes.js';
// import { AuthContext } from '../../assets/api/context/authContext.jsx';
// import { useContext } from 'react';
export const CardPaciente = ({ name, birthDate, cpf }) => {
    // const { idUser } = useContext(AuthContext);
    // console.log(idUser);
    const { recipe } = useFetchClientRecipes('api/recipe/get-recipes');
    console.log(recipe);

    return (
        <CardPacienteContainer>
            <CardPacienteInfo>
                <p><span>Nome: </span> {name} </p>

                <p><span>Data de Nascimento: </span> {birthDate} </p>

                <p><span>CPF: </span> {cpf} </p>
            </CardPacienteInfo>

            <CardPacienteButtons>
                <Button
                    bgColor={"var(--turquoise)"}
                    color={"var(--black)"}
                    text={'Ver Receitas'} 
                    // recipes={recipes}
                    />
                <Button
                    bgColor={"var(--yellow)"}
                    color={"var(--black)"}
                    text={'Cadastrar Receita'}
                    textColor={'var(--black)'} />
            </CardPacienteButtons>

        </CardPacienteContainer>
    )
}

CardPaciente.propTypes = {
    name: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired
}
