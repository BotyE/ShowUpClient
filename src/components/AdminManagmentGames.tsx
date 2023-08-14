import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import GameConnect from "./GameConnect";
import GameCanCreate from "./GameCanCreate";
import GameOnManagment from "./GameOnManagment";


const AdminManagmentGames = () => {

    const games = [{
        name: "mafia-3ipg{A@#~yBYF*8RHwpj"
    },{
        name: "Бункер"
    },{
        name: "Подкаст"
    },{
        name: "Кто я?"
    }]


    return (
        <div className={styles.admin_container}>
            <h1 className={styles.title}>Ваши комнаты:</h1>
            {games.map( (game, index) => 
            <GameOnManagment index={index} game={game}/>)}
        </div>
    )
}

export default observer(AdminManagmentGames);