import Header from "../../components/header/Header";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store-hooks";
import {useNavigate} from "react-router-dom";
import {setGameLevel, setLevel} from "../../store/slices/gameStateSlice";
import {LevelStyled} from "./level-styles";
import {Button} from "../../components/buttons/Button";



const Level: FC =() => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(setGameLevel())
        dispatch(setLevel())
        navigate("/")
    }
    const gameLevel = useAppSelector(state => state.gameLevel)

    return (
        <LevelStyled>
            <Header title={'пройден'} subTitle={"Изумительно!"}/>
            <Button text={`Уровень ${gameLevel + 1}`} onClick={onClick} withMargin={true}/>
        </LevelStyled>
    )
}


export  default Level