import Header from "../../components/header/Header";
import Grid from "../../components/grid/Grid";
import InputBlock from "../../components/Input-block/Input-block";
import React, {FC, useEffect, useState} from "react";
import Modal from "../../components/modals/Popup";

const MainPage: FC = () => {

    const [isSeveralTabs, setIsSeveralTabs] = useState(false)


    useEffect(() => {
        window.addEventListener('storage', function(event) {
            event.key === "persist:root" && setIsSeveralTabs(true)
        })
    }, []);

    return (
        <main className="App">
            <Header/>
            <Grid/>
            <InputBlock/>
            {isSeveralTabs &&
                <Modal
                    text={"Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите cтраницу."}
                    to={"./"}
                    title={"Две вкладки с игрой?"}
                    buttonText={"Обновите"}
                />}
        </main>

    )
}

export default MainPage