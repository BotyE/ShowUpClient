import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/DefaultText";
import ButtonUser from "../components/ButtonUser";
import LobbyGames from "../components/LobbyGames";
import UsersManage from "../components/UsersManage";
import GamesManage from "../components/GamesManage";


const SuperAdmin = () => {

    return (
        <div className={styles.container}>
            <ButtonUser/>
            <UsersManage/>
            <GamesManage/>
        </div>
    )
}

export default observer(SuperAdmin)