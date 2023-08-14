import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import twitch from "../assets/twitch-icon.png"
import { Button, Image } from "antd";
import { useNavigate } from "react-router";
import { LOBBY_ROUTE } from "../utils/consts";

const ButtonLogin = () => {

    const navigate = useNavigate()

    const navigateToLobby = () => {
        navigate(LOBBY_ROUTE)
    }

    return (
        <Button href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=vewaf736q0yj5q9nzxcrlutndj783o&redirect_uri=http://localhost:3000/login" className={styles.button}>
            <Image className={styles.twitch} src={twitch} preview={false}/>
            <p>Вход</p>
        </Button>
    )
}

export default observer(ButtonLogin)