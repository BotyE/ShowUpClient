import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import ButtonTask from "./ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../utils/consts";

interface GameConnectIF {
    index: number,
    game: {
        name: string,
        link?: string
    }
}


const GameCanCreate = ({index, game}:GameConnectIF) => {
 
    const navigate = useNavigate()

    const update = () => {
        navigate(HOME_ROUTE)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            <ButtonTask update = {update} title = {"Создать"} />
        </div>
    )
}

export default observer(GameCanCreate);