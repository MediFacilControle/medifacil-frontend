import React from 'react'
import { PrimaryLayout } from '../../components/layout/primary-layout/primary-layout'
import { HomeContainer, HomeMain } from './home.style.ts'
import { SearchInput } from '../../components/Input/search-input.jsx'
import { CardPaciente } from '../../components/card-paciente/card-paciente.jsx'

export const Home = () => {
    return (
        <PrimaryLayout>
            <HomeContainer>
                <SearchInput />

                <HomeMain>
                    <CardPaciente />
                </HomeMain>
            </HomeContainer>
        </PrimaryLayout>
    )
}
