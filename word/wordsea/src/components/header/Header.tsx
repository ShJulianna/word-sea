import {FC} from "react";
import {useAppSelector} from "../../store/store-hooks";
import "./Header.css"

interface HeaderType {
    title?: string
    subTitle?: string
}

const Header: FC<HeaderType> = ({title, subTitle}) => {

    const {gameLevel} = useAppSelector(state => state)
    return <header className="header">
        Уровень {gameLevel} {title}
        {subTitle && <p className={"subtitle"}>{subTitle}</p>}
    </header>
}

export default Header