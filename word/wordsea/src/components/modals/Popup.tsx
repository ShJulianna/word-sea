import {FC} from "react";
import Button from "../buttons/Button";
import {ReactComponent as Popup} from "../../images/popup.svg";
import "./Popup.css"

interface ModalType {
    title?: string
    text: string
    buttonText: string
    to: string
}

const Modal: FC<ModalType> = ({title, text, buttonText, to}) => {

    const onclick = () => window.location.reload()

    return <div className={'modal-container'}>
        <div className={'modal'}>
            <div className={"modal-header"}>
                <Popup />
                <p className={"modal-title"}>{title}</p>
            </div>
            <div className={"modal-text"}>{text}</div>
            <Button text={buttonText} onClick={onclick}/>
        </div>
    </div>
}

export  default Modal