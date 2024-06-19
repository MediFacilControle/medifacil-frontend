import { CardPacienteButtons, CardPacienteContainer, CardPacienteInfo } from './card-paciente.style.ts'
import { Button } from '../button/button.jsx'

export const CardPaciente = () => {
    return (
        <CardPacienteContainer>
            <CardPacienteInfo>
                <p><span>Nome: </span> Paciente nome tal</p>

                <p><span>Data de Nascimento: </span> dd/MM/aaa</p>

                <p><span>CPF: </span> XXX.XXX.XXX-XX</p>
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
