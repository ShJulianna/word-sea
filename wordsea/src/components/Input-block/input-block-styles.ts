import styled from "styled-components";

export const InputContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainCircle = styled.section`
    min-width: 294px;
    min-height: 294px;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
    width: 20vw;
    height: 20vw;
    border: 20px solid #3E4A68;
    /*transform: rotate(0deg);*/
    /*transition: transform 0.7s linear;*/
`

export const Letter = styled.section<{$isActive: boolean, $index: number, $numberOfLetters: number}>`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: -17%;
    min-width: 70px;
    min-height: 70px;
    width: 36%;
    height: 36%;
    top: 45%;
    left: 50%;
    background-color: ${props => props.$isActive ? "#E96FA4" : "#FFF"};
    box-shadow: ${props => props.$isActive ? "0 2px 0 2px #AF638C" : "0 2px 0 2px #878282"};
    user-select: none;
    font-family: "CustomFont", sans-serif;
    color: ${props => props.$isActive ? "#FFF" : "#58595B"}; 
    font-size: 57px;
    text-transform: uppercase;
    transform:  ${props => `rotate(${(props.$index + 1) * (360 / props.$numberOfLetters) - 15}deg) translate(140%) rotate(-${(props.$index + 1) * (360 / props.$numberOfLetters) - 15}deg)`} 
`