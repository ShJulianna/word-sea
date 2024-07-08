import styled from "styled-components";

export const MainButton = styled.button<{$withMargin?: boolean}>`
    font-family: inherit;
    min-width: 330px;
    height: 94px;
    background-color: #65BD65;
    color: #ffffff;
    font-size: 40px;
    text-align: center;
    border-radius: 3rem;
    border: none;
    box-shadow: 0 2px 0 2px #426850;
    margin-top: ${props => props.$withMargin && "30vh" };  
`
