import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import styles from "../style.module.css"
import GameConnect from "../default/GameConnect";
import GameCanCreate from "./GameCanCreate";
import { Context } from "../..";


const AdminCanCreateGames = () => {

    const {user} = useContext(Context)

    const [games, setGames] = useState(user.gamesToCreate)



    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {user.gamesToCreate.map( (game:any, index:any) => 
            <GameCanCreate index={index} game={game}/>)}
        </div>
    )
}

export default observer(AdminCanCreateGames);