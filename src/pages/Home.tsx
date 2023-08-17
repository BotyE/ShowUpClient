import { observer } from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import ButtonLogin from "../components/common/ButtonLogin";
import styles from "./styles/home.module.css"
import DefaultText from "../components/default/DefaultText";
import { Context } from "../index";
import { useNavigate } from "react-router";
import { LOBBY_ROUTE } from "../utils/consts";


const Home = () => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    useEffect( () => {
        if(user.isAuth)
            navigate(LOBBY_ROUTE)
    }, [user.user])

    return (
        <div className={styles.container}>
            <ButtonLogin/>
            <DefaultText/>
        </div>
    )
}

export default observer(Home)