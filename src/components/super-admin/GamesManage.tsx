import { observer } from "mobx-react-lite";
import React, {useContext, useState} from "react";
import styles from "../style.module.css"
import GameConnect from "../default/GameConnect";
import GameManage from "./GameSuperAdmin";
import { Context } from "../..";
import { IGameAdmin } from "../../interfaces/interfaces";


const GamesManage = () => {

    const {user} = useContext(Context)

    const [games, setGames] = useState(user.gamesAdmin) 


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Игры:</h1>
            {games.map( (game: IGameAdmin, index: number) => 
                <GameManage index={index} game={game}/>)}
        </div>
    )
}

export default observer(GamesManage);