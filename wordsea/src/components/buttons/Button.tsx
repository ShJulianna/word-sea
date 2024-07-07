import {FC} from "react";
import './Button.css';

interface ButtonType {
    text: string
    onClick: () => void
}

const Button: FC<ButtonType> = ({onClick, text}) => {

    return <button className={"button"} onClick={onClick}>
        {text}
    </button>

}

export default Button