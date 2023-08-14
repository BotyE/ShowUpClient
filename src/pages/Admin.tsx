import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/DefaultText";
import ButtonUser from "../components/ButtonUser";
import LobbyGames from "../components/LobbyGames";
import AdminCanCreateGames from "../components/AdminCanCreateGames";
import AdminManagmentGames from "../components/AdminManagmentGames";


const Admin = () => {

    return (
        <div className={styles.container}>
            <ButtonUser/>
            <AdminCanCreateGames/>
            <AdminManagmentGames/>
        </div>
    )
}

export default observer(Admin)