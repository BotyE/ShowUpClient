import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import styles from "../style.module.css"
import ButtonTask from "../common/ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE, MANAGE_ROUTE, MODERATE_ROUTE } from "../../utils/consts";
import { CONNECT_COLOR, DELETE_COLOR, MANAGE_COLOR, MODERATE_COLOR } from "../../utils/vars";
import { IGameConnect, IGameCreate } from "../../utils/interfaces";
import { Context } from "../..";



const GameOnManagment = ({index, game}: IGameConnect) => {
    const {user} = useContext(Context)
 
    const navigate = useNavigate()

    const GoToGame = () => {
        navigate("/" + game.type + "/" + game.link)
    }

    const GoToManage = () => {
        navigate(MANAGE_ROUTE + "/" + game.type + "/" + game.link)
    }

    const DeleteGame = () => {
        user.setGamesCreated(user.gamesCreated.filter( (item: IGameCreate) => item.link !== game.link ))
    }

    const GoToModerate = () => {
        navigate( MODERATE_ROUTE + "/" + game.type + "/" + game.link)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            <div className={styles.buttons_bundle}>
                <ButtonTask update = {GoToGame} title = {"Войти"} color = {CONNECT_COLOR}/>
                <ButtonTask update = {GoToManage} title = {"Настроить"} color = {MANAGE_COLOR}/>
                <ButtonTask update = {DeleteGame} title = {"Удалить"} color = {DELETE_COLOR}/>
                <ButtonTask update = {GoToModerate} title = {"Модерировать"} color = {MODERATE_COLOR}/>
            </div>
        </div>
    )
}

export default observer(GameOnManagment);