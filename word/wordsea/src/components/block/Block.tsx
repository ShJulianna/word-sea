import "./Block.css"
import {FC} from "react";

interface BlockType {
    preLetter?: boolean
    letter: string,
    isGuessed: boolean
}

const Block: FC<BlockType> = ({letter, isGuessed, preLetter = false}) => {

    return <div className={`block ${preLetter? "pre-letter" : isGuessed ? "guessed": "not-guessed"}`}>
        {isGuessed ?  letter : ""}
    </div>
}

export default Block