import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import ButtonTask from "./ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../utils/consts";
import { CONNECT_COLOR, DELETE_COLOR, MANAGE_COLOR, MODERATE_COLOR } from "../utils/vars";

interface GameConnectIF {
    index: number,
    game: {
        name: string,
        link?: string
    }
}


const GameOnManagment = ({index, game}:GameConnectIF) => {
 
    const navigate = useNavigate()

    const update = () => {
        navigate(HOME_ROUTE)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            <div className={styles.buttons_bundle}>
                <ButtonTask update = {update} title = {"Войти"} color = {CONNECT_COLOR}/>
                <ButtonTask update = {update} title = {"Настроить"} color = {MANAGE_COLOR}/>
                <ButtonTask update = {update} title = {"Удалить"} color = {DELETE_COLOR}/>
                <ButtonTask update = {update} title = {"Модерировать"} color = {MODERATE_COLOR}/>
            </div>
        </div>
    )
}

export default observer(GameOnManagment);