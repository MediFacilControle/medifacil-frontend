import React from 'react'
import { ButtonStyle } from './button.style.ts'

export const Button = ({ color, text, ...props }) => {
    return (
        <ButtonStyle
            color={color}
            {...props}
        >{text}
        </ButtonStyle>
    )
}