import styled from "styled-components";

type ButtonStyleProps = {
    color?: string;
    bgColor?: string;
    width?: string;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
    background-color: ${props => props.bgColor || "var(--red)"};
    padding: .7rem 0;
    border-radius: var(--border-radius);
    font-weight: var(--semi-bold);
    color: ${props => props.color || "var(--white)"};
    width: ${props => props.width || "100%"};
    text-align: center;
    transition: all .3s;

    &:hover {
        filter: brightness(1.1);
    }
`