import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import GameConnect from "./GameConnect";
import GameManage from "./GameManage";


const GamesManage = () => {

    const games = [{
        name: "ПРОВЕРКА"
    },{
        name: "Бункер",
        linkEdit: "sad"
    },{
        name: "Подкаст"
    },{
        name: "Кто я?"
    }]


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Игры:</h1>
            {games.map( (game, index) => 
            <GameManage index={index} game={game}/>)}
        </div>
    )
}

export default observer(GamesManage);