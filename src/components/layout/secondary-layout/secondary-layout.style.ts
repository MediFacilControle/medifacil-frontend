import styled from "styled-components";
import background from '../../../assets/background.jpg'

export const LayoutBg = styled.html`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`

export const LayoutBgContainer = styled.div`
    width: inherit;
    height: inherit;
    background-color: rgba(116, 189, 232, .8);
`