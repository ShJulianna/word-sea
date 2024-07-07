import Header from "../../components/header/Header";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store-hooks";
import Button from "../../components/buttons/Button";
import {useNavigate} from "react-router-dom";
import {setGameLevel, setLevel} from "../../store/slices/gameStateSlice";


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
        <main className="App">
            <Header title={'пройден'} subTitle={"Изумительно!"}/>
            <Button text={`Уровень ${gameLevel + 1}`} onClick={onClick}/>
        </main>
    )
}


export  default Level