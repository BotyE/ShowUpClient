import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"
import twitch from "../assets/twitch-icon.png"
import { Button, Image } from "antd";
import { useNavigate } from "react-router";
import { HOME_ROUTE, LOBBY_ROUTE } from "../utils/consts";
import { TWITCH_COLOR } from "../utils/vars";

interface ButtonTaskIF {
    update: CallableFunction
    title: string
    color?: string
}

const ButtonTask = ({update,title,color}: ButtonTaskIF) => {

    return (
        <Button style={{backgroundColor: color ? color : TWITCH_COLOR}} onClick={() => { update()}} className={styles.button_connect}>
            {title}
        </Button>
    )
}

export default observer(ButtonTask)