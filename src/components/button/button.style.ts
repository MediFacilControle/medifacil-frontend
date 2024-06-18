import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color: ${props => props.color || "var(--red)"};
    padding: .7rem 0;
    border-radius: var(--border-radius);
    font-weight: var(--semi-bold);
    color: var(--white);
    width: 100%;
    text-align: center;
`