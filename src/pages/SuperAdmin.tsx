import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/default/DefaultText";
import ButtonUser from "../components/common/ButtonUser";
import LobbyGames from "../components/default/LobbyGames";
import UsersManage from "../components/super-admin/UsersManage";
import GamesSuperAdmin from "../components/super-admin/GamesManage";
import GamesManage from "../components/super-admin/GamesManage";


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