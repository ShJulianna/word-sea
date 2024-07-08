import {FC} from "react";
import Block from "../block/Block";
import {Row as RowType} from "../../types/types";
import {RowStyled} from "./row-styles";



interface RowInterface {
    row: RowType,
    preLetter?: boolean
}

const Row: FC<RowInterface> = ({row, preLetter}) => {
    return <RowStyled>
        {
            row.word?.toUpperCase().split("").map((letter, i) =>
                <Block key={letter + i.toString()} letter={letter} isGuessed={row.isGuessed} preLetter={preLetter}/>
            )
        }
    </RowStyled>
}

export default Row

