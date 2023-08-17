import { observer } from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import styles from "../style.module.css"
import twitch from "../../assets/twitch-icon.png"
import { Button, Image } from "antd";
import { useNavigate } from "react-router";
import { HOME_ROUTE, LOBBY_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import { takeImage } from "../../http/userApi";

const ButtonUser = () => {

    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const navigateToLobby = () => {
        localStorage.setItem("token", "")
        user.setIsAuth(false)
        user.setUser()
        navigate(HOME_ROUTE)
    }

    return (
        <Button onClick={() => { navigateToLobby()}} className={styles.button}>
            {user.user.profile_image_url && <Image className={styles.user} src={user.user.profile_image_url} preview={false}/>}
            {user.user.display_name &&<p>{user.user.display_name}</p>}
        </Button>
    )
}

export default observer(ButtonUser)