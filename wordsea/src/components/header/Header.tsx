import {FC} from "react";
import {useAppSelector} from "../../store/store-hooks";
import {HeaderStyled, Subtitle} from "./header-styles";

interface HeaderType {
    title?: string
    subTitle?: string
}

const Header: FC<HeaderType> = ({title, subTitle}) => {

    const gameLevel = useAppSelector(state => state.gameLevel)
    return <HeaderStyled>
        Уровень {gameLevel} {title}
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
    </HeaderStyled>
}

export default Header