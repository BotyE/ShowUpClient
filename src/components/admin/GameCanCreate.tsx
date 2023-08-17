import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import styles from "../style.module.css"
import ButtonTask from "../common/ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import { IGameCreate } from "../../interfaces/interfaces";
import { v4 } from "uuid"

interface GameConnectIF {
    index: number,
    game: IGameCreate
}


const GameCanCreate = ({index, game}:GameConnectIF) => {
    const {user} = useContext(Context) 
    const navigate = useNavigate()

    const update = () => {
        user.setGamesCreated([...user.gamesCreated, {
            name: game.name,
            type: game.type,
            link: game.type + "-" + v4()
        }])
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            <ButtonTask update = {update} title = {"Создать"} />
        </div>
    )
}

export default observer(GameCanCreate);