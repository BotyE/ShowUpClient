import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import GameConnect from "./GameConnect";
import UserEdit from "./UserEdit";
import ButtonTask from "./ButtonTask";
import { CONNECT_COLOR } from "../utils/vars";


const UsersManage = () => {

    const games = [{
        name: "evelone"
    },{
        name: "Бункер"
    },{
        name: "Подкаст"
    },{
        name: "Кто я?"
    }]


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {games.map( (game, index) => 
            <UserEdit index={index} game={game}/>)}
            <div style={{marginTop: "50px"}}>
                <ButtonTask update={()=> {}} title={"Добавить стримера"} color={CONNECT_COLOR}/>
            </div>
        </div>
    )
}

export default observer(UsersManage);