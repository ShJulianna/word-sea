import {useAppSelector} from "../../store/store-hooks";
import Row from "../row/Row";
import {useEffect} from "react";
import { useNavigate} from "react-router-dom";


const Grid = () => {

    const { gameProcess} = useAppSelector(state => state)
    const navigate = useNavigate();

    useEffect(() => {
        if (gameProcess.filter(({isGuessed})=> isGuessed).length === gameProcess.length) {
            navigate('/level', )
        }
    }, [gameProcess, navigate]);

    return <>
        {
            gameProcess.map(row => <Row row={row}/>)
        }
    </>
}

export default Grid