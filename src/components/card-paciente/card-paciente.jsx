import { CardPacienteButtons, CardPacienteContainer, CardPacienteInfo } from './card-paciente.style.ts'
import { Button } from '../button/button.jsx'
import PropTypes from 'prop-types'

export const CardPaciente = ({ name, birthDate, cpf }) => {
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
                    text={'Ver Receitas'} />
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
