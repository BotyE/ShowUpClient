import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import ButtonConnect from "./ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../utils/consts";
import ButtonTask from "./ButtonTask";
import { DELETE_COLOR } from "../utils/vars";

interface UserEditIF {
    index: number,
    game: {
        name: string,
        link?: string
    }
}


const UserEdit = ({index, game}:UserEditIF) => {

    const navigate = useNavigate()

    const update = () => {
        navigate(HOME_ROUTE)
    }

    return (
        <div className={styles.user_container}>
            <ButtonTask  update = {update} title = {"X"} color={DELETE_COLOR} />
            <p>{index+1}. {game.name}</p>
            <ButtonTask  update = {update} title = {"Добавить игру"}  />
            <ButtonTask  update = {update} title = {"Удалить игру"}  />
        </div>
    )
}

export default observer(UserEdit);