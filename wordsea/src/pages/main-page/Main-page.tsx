import Header from "../../components/header/Header";
import Grid from "../../components/grid/Grid";
import {FC, useEffect, useState} from "react";
import Modal from "../../components/modals/Popup";
import InputBlock from "../../components/Input-block/Input-block";
import {Main} from "../../App-styles";

const MainPage: FC = () => {

    const [isSeveralTabs, setIsSeveralTabs] = useState(false)


    useEffect(() => {
        window.addEventListener('storage', function(event: any) {
            event.key === "persist:root" && setIsSeveralTabs(true)
        })
    }, []);

    return (
        <Main>
            <Header/>
            <Grid/>
            <InputBlock/>
            {isSeveralTabs &&
                <Modal
                    text={"Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите cтраницу."}
                    title={"Две вкладки с игрой?"}
                    buttonText={"Обновите"}
                />}
        </Main>

    )
}

export default MainPage