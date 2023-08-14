import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import GameConnect from "./GameConnect";
import GameCanCreate from "./GameCanCreate";


const AdminCanCreateGames = () => {

    const games = [{
        name: "ПРОВЕРКА"
    },{
        name: "Бункер"
    },{
        name: "Подкаст"
    },{
        name: "Кто я?"
    }]


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {games.map( (game, index) => 
            <GameCanCreate index={index} game={game}/>)}
        </div>
    )
}

export default observer(AdminCanCreateGames);