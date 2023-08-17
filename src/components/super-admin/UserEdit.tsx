import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import styles from "../style.module.css"
import ButtonConnect from "../common/ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE } from "../../utils/consts";
import ButtonTask from "../common/ButtonTask";
import { DELETE_COLOR } from "../../utils/vars";
import { IStreamer } from "../../utils/interfaces";
import { Context } from "../..";

interface UserEditIF {
    index: number,
    streamer: IStreamer
}


const UserEdit = ({index, streamer}:UserEditIF) => {

    const navigate = useNavigate()

    const {user} = useContext(Context)


    const update = (name: string) => {
        user.setStreamers(user.streamers.filter( (item: IStreamer) => streamer.name !== item.name))
    }


    return (
        <div className={styles.user_container}>
            <ButtonTask  update = {update} title = {"X"} color={DELETE_COLOR} />
            <p>{index+1}. {streamer.displayName}</p>
            <ButtonTask  update = {update} title = {"Добавить игру"}  />
            <ButtonTask  update = {update} title = {"Удалить игру"}  />
        </div>
    )
}

export default observer(UserEdit);