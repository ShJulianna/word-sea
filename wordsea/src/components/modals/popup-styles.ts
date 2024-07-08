import styled from "styled-components";

export  const ModalContainer = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    z-index: 99;
    padding:30px 0;
    background: rgb(0,0,0, 0.3);
`

export  const ModalBox = styled.section`
    width: 80%;
    max-width: 530px;
    min-height: 428px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10%;
`

export  const ModalHeader = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: -19px;
    color: #ffffff;
`

export  const ModalTitle = styled.section`    
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 40px;
    width: 80%;
    line-height: 36px;
    text-align: center;
`

export  const ModalText = styled.section`
    font-family: inherit;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
    color: #4D4D4D;
    margin: 64px 20px 16px;
`