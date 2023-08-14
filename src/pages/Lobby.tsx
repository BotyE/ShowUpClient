import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/DefaultText";
import ButtonUser from "../components/ButtonUser";
import LobbyGames from "../components/LobbyGames";


const Lobby = () => {

    return (
        <div className={styles.container}>
            <ButtonUser/>
            <LobbyGames/>
        </div>
    )
}

export default observer(Lobby)