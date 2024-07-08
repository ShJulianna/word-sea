import {FC} from "react";
import {MainButton} from "./button-styles";

interface ButtonType {
    text: string
    onClick: () => void
    withMargin?: boolean
}

export const Button: FC<ButtonType> = ({onClick, text, withMargin}) => {

    return <MainButton onClick={onClick} $withMargin={withMargin}>
        {text}
    </MainButton>

}
