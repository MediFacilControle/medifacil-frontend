import { CardPacienteButtons, CardPacienteContainer, CardPacienteInfo } from './card-paciente.style.ts'
import { Button } from '../button/button.jsx'

export const CardPaciente = () => {
    return (
        <CardPacienteContainer>
            <CardPacienteInfo>

            </CardPacienteInfo>

            <CardPacienteButtons>
                <Button
                    color={"var(--turquoise)"}
                    text={'Ver Receitas'} />
            </CardPacienteButtons>
        </CardPacienteContainer>
    )
}
