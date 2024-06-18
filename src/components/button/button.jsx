import React from 'react'
import { ButtonStyle } from './button.style.ts'

export const Button = ({ onClick, color, text, ...props }) => {
    return (
        <ButtonStyle
            color={color}
            onClick={onClick ? onClick : null}
            {...props}
        >{text}
        </ButtonStyle>
    )
}