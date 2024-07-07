import {FC} from "react";
import Block from "../block/Block";
import "./Row.css"
import {Row as RowType} from "../../types/types";
interface RowInterface {
    row: RowType,
    preLetter?: boolean
}

const Row: FC<RowInterface> = ({row, preLetter}) => {
    return <div className={"row-section"}>
        {
            row.word?.toUpperCase().split("").map(letter =>
            <Block letter={letter} isGuessed={row.isGuessed} preLetter={preLetter}/>
            )
        }
    </div>
}

export default Row