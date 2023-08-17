import { observer } from "mobx-react-lite";
import React, {useContext, useState, useEffect} from "react";
import styles from "../style.module.css"
import GameConnect from "../default/GameConnect";
import GameCanCreate from "./GameCanCreate";
import GameOnManagment from "./GameOnManagment";
import { Context } from "../..";
import { IGameCreate } from "../../utils/interfaces";


const AdminManagmentGames = () => {

    const {user} = useContext(Context)

    const [games, setGames] = useState(user.gamesCreated)

    // useEffect( () => {
    //     setGames(user.gamesCreated)
    // }, [user.gamesCreated])


    return (
        <div className={styles.admin_container}>
            <h1 className={styles.title}>Ваши комнаты:</h1>
            {user.gamesCreated.map( (game: IGameCreate, index: number) => 
            <GameOnManagment index={index} game={game}/>)}
        </div>
    )
}

export default observer(AdminManagmentGames);