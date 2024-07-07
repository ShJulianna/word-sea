import "./Input-block.css"
import {FC, useEffect, useState} from "react";
import Row from "../row/Row";
import {useAppDispatch, useAppSelector} from "../../store/store-hooks";
import {SORTED_LEVELS} from "../../data/constants";
import {setProcess} from "../../store/slices/gameStateSlice";
import {gainLetters, numberOfLetters} from "../../utils/helpers";


interface DotType {
    id: string
    element: string
    index: number
    numberOfLetters: number
    onChange: (letter: Record<string, string>) => void
    setIsPressed: (value: boolean) => void
    isPressed: boolean
    targets: Record<string, string>
}
const Dot: FC<DotType> = ({element, id, index, onChange, setIsPressed, isPressed,targets, numberOfLetters}) => {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(Object.keys( targets).includes(id)){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [targets, id]);

    return <div className={`letter ${isActive ? "active" : "not-active"}`}
                  style={{
                      transform: `rotate(${(index + 1) * (360 / numberOfLetters)-15}deg) translate(140%) rotate(-${(index + 1) * (360 / numberOfLetters)-15}deg)`
                  }}
                  onMouseEnter={() => {
                      if(isPressed){
                          if (Object.keys(targets)[Object.keys(targets).length -2] === id) {
                              const newTargets = Object.entries(targets)
                              newTargets.pop()
                              onChange(Object.fromEntries(newTargets))

                          } else {
                              onChange({
                                  ...targets,
                                  [id]: element
                              })
                          }
                      }
                  }}
                  onMouseDown={() => {
                      setIsPressed(true)
                      onChange({
                          ...targets,
                          [id]: element
                      })

                  }}

    >{element}
    </div>
}

const InputBlock = () => {

    const dispatch = useAppDispatch();
    const {level} = useAppSelector(state => state)
    const [letters, setLetters] = useState<string[]>([])
    const [isPressed, setIsPressed] = useState(false)
    const [inputWord, setInputWord] = useState('')
    const [targets, setTargets] = useState<Record<string, string>>({})

    useEffect(() => {
        const numbers = numberOfLetters(SORTED_LEVELS[`SORTED_LEVEL_${level}`])
        setLetters(gainLetters(numbers))
    }, [level])

    useEffect(() => {
        // if (targets)
        setInputWord(Object.values(targets).join(''))
    }, [targets]);

    const clearInput = () => {
        if (SORTED_LEVELS[`SORTED_LEVEL_${level}`].includes(inputWord)){
            dispatch(setProcess(inputWord))
        }
        setIsPressed(false)
        setInputWord('')
        setTargets({})
    }

    return <div className="container" onMouseUp={clearInput}>
        <Row row={{word: inputWord, isGuessed: true}} preLetter={true}/>
        <div className={"main-circle"} >
            {letters.map((element,index) =>
                <Dot
                    key={element+index.toString()}
                    id={element+index.toString()}
                    element={element}
                    index={index}
                    numberOfLetters={Object.entries(letters).length}
                    onChange={setTargets}
                    setIsPressed={setIsPressed}
                    isPressed={isPressed}
                    targets={targets}
                ></Dot>
            )}
        </div>

    </div>
}

export default InputBlock
