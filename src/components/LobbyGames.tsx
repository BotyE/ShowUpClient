import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import GameConnect from "./GameConnect";


const LobbyGames = () => {

    const games = [{
        name: "ПРОВЕРКА",
        link: "mafia"
    },{
        name: "Бункер",
        link: "bunker"
    },{
        name: "Подкаст",
        link: "podcast"
    },{
        name: "Кто я?",
        link: "whoami"
    }]


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {games.map( (game, index) => 
            <GameConnect index={index} game={game}/>)}
        </div>
    )
}

export default observer(LobbyGames);