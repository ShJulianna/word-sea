import {FC} from "react";
import {BlockBox, PreLetter} from "./block-styles";

interface BlockType {
    preLetter?: boolean
    letter: string,
    isGuessed: boolean
}

const Block: FC<BlockType> = ({letter, isGuessed, preLetter = false}) => {

    return preLetter ?
        <PreLetter>{letter}</PreLetter>
        : <BlockBox $isGuessed={isGuessed}>{letter}</BlockBox>
}

export default Block