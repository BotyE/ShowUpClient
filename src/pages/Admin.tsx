import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/default/DefaultText";
import ButtonUser from "../components/common/ButtonUser";
import LobbyGames from "../components/default/LobbyGames";
import AdminCanCreateGames from "../components/admin/AdminCanCreateGames";
import AdminManagmentGames from "../components/admin/AdminManagmentGames";


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