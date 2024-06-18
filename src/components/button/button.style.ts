import styled from "styled-components";



export const ButtonStyle = styled.button`
    background-color: ${props => props.color};
    padding: .7rem 1rem;
    border-radius: var(--border-radius);
    font-weight: var(--semi-bold);
    color: var(--white);
`