import { observer } from "mobx-react-lite";
import React from "react";
import styles from "../style.module.css"
import ButtonConnect from "../common/ButtonTask";
import { useNavigate } from "react-router";
import { HOME_ROUTE, SUPER_ADMIN_ROUTE } from "../../utils/consts";
import ButtonTask from "../common/ButtonTask";
import { MANAGE_COLOR } from "../../utils/vars";
import { IGameAdmin } from "../../interfaces/interfaces";

interface GameConnectIF {
    index: number,
    game: IGameAdmin
}


const GamesSuperAdmin = ({index, game}:GameConnectIF) => {

    const navigate = useNavigate()

    const update = () => {
        navigate(SUPER_ADMIN_ROUTE + "/" + game.type)
    }

    return (
        <div className={styles.connect_container}>
            <p>{index+1}. {game.name}</p>
            {game.editable && <ButtonTask  update = {update} title = {"Настроить"} color={MANAGE_COLOR} />}
        </div>
    )
}

export default observer(GamesSuperAdmin);