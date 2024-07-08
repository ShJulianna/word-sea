import {FC} from "react";
import {Button} from "../buttons/Button";
import {ReactComponent as Popup} from "../../images/popup.svg";
import {ModalBox, ModalContainer, ModalHeader, ModalText, ModalTitle} from "./popup-styles";

interface ModalType {
    title?: string
    text: string
    buttonText: string
}

const Modal: FC<ModalType> = ({title, text, buttonText}) => {

    const onclick = () => window.location.reload()

    return <ModalContainer>
        <ModalBox>
            <ModalHeader>
                <Popup />
                <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <ModalText className={"modal-text"}>{text}</ModalText>
            <Button text={buttonText} onClick={onclick}/>
        </ModalBox>
    </ModalContainer>
}

export  default Modal