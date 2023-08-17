import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import styles from "../style.module.css"
import GameConnect from "../default/GameConnect";
import UserEdit from "./UserEdit";
import ButtonTask from "../common/ButtonTask";
import { CONNECT_COLOR } from "../../utils/vars";
import { Context } from "../..";
import { IStreamer } from "../../interfaces/interfaces";


const UsersManage = () => {
    const {user} = useContext(Context)


    return (
        <div className={styles.lobby_container}>
            <h1 className={styles.title}>Доступные игры:</h1>
            {user.streamers.map( (streamer: IStreamer, index: number) => 
            <UserEdit index={index} streamer={streamer} />)}
            <div style={{marginTop: "50px"}}>
                <ButtonTask update={()=> {}} title={"Добавить стримера"} color={CONNECT_COLOR}/>
            </div>
        </div>
    )
}

export default observer(UsersManage);