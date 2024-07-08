import styled from "styled-components";


export const BlockBox =  styled.section<{$isGuessed: boolean}> `
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    font-weight: 700;
    line-height: 84px;
    text-align: center;
    color: #ffffff;
    border-radius: 1.2rem;
    width: 72px;
    height: 72px;
    background-color:  ${props => props.$isGuessed ? "#65BD65" : "#FFF"};
`

export const PreLetter =  styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    background-color: hsla(0, 0%, 100%, 1);
    border-radius: 0.5rem;
    margin: 20px 1px;
    color: #58595B;
`