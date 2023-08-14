import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import ButtonConnect from "./ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../utils/consts";
import ButtonTask from "./ButtonTask";
import { MANAGE_COLOR } from "../utils/vars";

interface GameConnectIF {
    index: number,
    game: {
        name: string,
        link?: string,
        linkEdit?: string
    }
}


const GameConnect = ({index, game}:GameConnectIF) => {

    const navigate = useNavigate()

    const update = () => {
        navigate(HOME_ROUTE)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            {game.linkEdit && <ButtonTask  update = {update} title = {"Настроить"} color={MANAGE_COLOR} />}
        </div>
    )
}

export default observer(GameConnect);