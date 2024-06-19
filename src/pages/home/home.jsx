import { PrimaryLayout } from '../../components/layout/primary-layout/primary-layout'
import { HomeContainer, HomeMain } from './home.style.ts'
import { SearchInput } from '../../components/Input/search-input.jsx'
import { CardPaciente } from '../../components/card-paciente/card-paciente.jsx'
import { Button } from '../../components/button/button.jsx'
import { SearchContainer } from '../../components/card-paciente/card-paciente.style.ts'

export const Home = () => {
    return (
        <PrimaryLayout>
            <HomeContainer>
                <SearchContainer>
                    <SearchInput />
                    <Button
                        text={'Cadastrar Paciente'} />
                </SearchContainer>

                <HomeMain>
                    <CardPaciente />
                    <CardPaciente />
                    <CardPaciente />
                    <CardPaciente />
                    <CardPaciente />
                </HomeMain>

            </HomeContainer>
        </PrimaryLayout>
    )
}
