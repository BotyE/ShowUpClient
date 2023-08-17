import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import styles from "../style.module.css"
import GameConnect from "./GameConnect";
import { Context } from "../..";
import { IGameCreate } from "../../interfaces/interfaces";


const LobbyGames = () => {

    const {user} = useContext(Context)


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {user.gamesCreated.map( (game: IGameCreate, index: number) => 
            <GameConnect index={index} game={game}/>)}
        </div>
    )
}

export default observer(LobbyGames);