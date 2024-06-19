import React from 'react'
import { PrimaryLayout } from '../../components/layout/primary-layout/primary-layout'
import { HomeContainer } from './home.style.ts'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Home = () => {
    return (
        <PrimaryLayout>
           <HomeContainer>
                <TextField
                label='Pesquisar paciente'
                size='small'
                sx={'width: 100%; background-color: var(--blueish-gray); border-radius: var(--border-radius)'}
                InputProps={{
                    startAdornment: <InputAdornment position='end'>
                        <SearchIcon edge='end' />
                    </InputAdornment>
                }} />
           </HomeContainer>
        </PrimaryLayout>
    )
}
