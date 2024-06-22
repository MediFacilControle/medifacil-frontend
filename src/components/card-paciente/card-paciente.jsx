import { CardPacienteButtons, CardPacienteContainer, CardPacienteInfo } from './card-paciente.style.ts'
import { Button } from '../button/button.jsx'
import PropTypes from 'prop-types'
import { useFetchClientRecipes } from '../../hooks/useFetchClientRecipes.js';
import { useFetchPacientRecipes } from '../../hooks/useFetchPacientRecipes.js';

export const CardPaciente = ({ name, birthDate, cpf, id }) => {
    // para pegar todos as receitas relacionado ao médico (pessoa logada)
    const { recipe } = useFetchClientRecipes('api/recipe/get-recipes');
    // para pegar todas as receitas do paciente (independente de quem preescreveu)
    const { recipePacient } = useFetchPacientRecipes('api/recipe/get-user-recipe', id);
    console.log(recipePacient)
    console.log(recipe);

    return (
        <CardPacienteContainer>
            <CardPacienteInfo>
                <p><span>Nome: </span> {name} </p>

                <p><span>Data de Nascimento: </span> {birthDate} </p>

                <p><span>CPF: </span> {cpf} </p>
                <p><span>id: </span> {id} </p>
            </CardPacienteInfo>

            <CardPacienteButtons>
                <Button
                    bgColor={"var(--turquoise)"}
                    color={"var(--black)"}
                    text={'Ver Receitas'} 
                    // recipes={recipePacient}
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
    cpf: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
