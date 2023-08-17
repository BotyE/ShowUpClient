import { observer } from "mobx-react-lite";
import React from "react";
import styles from "../style.module.css"
import ButtonConnect from "../common/ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../utils/consts";
import ButtonTask from "../common/ButtonTask";
import { IGameCreate } from "../../utils/interfaces";

interface GameConnectIF {
    index: number,
    game: IGameCreate
}


const GameConnect = ({index, game}:GameConnectIF) => {

    const navigate = useNavigate()

    const update = () => {
        navigate("/" + game.type + "/" + game.link)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            <ButtonTask  update = {update} title = {"Войти"}  />
        </div>
    )
}

export default observer(GameConnect);