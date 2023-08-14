import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import styles from "./styles/home.module.css"
import DefaultText from "../components/DefaultText";
import ButtonUser from "../components/ButtonUser";
import LobbyGames from "../components/LobbyGames";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { LOBBY_ROUTE } from "../utils/consts";


const Login = () => {
    const navigate = useNavigate()
    function getHashValue(key:any) {
        const matches = window.location.hash.match(new RegExp(key+'=([^&]*)'));
        return matches ? matches[1] : "";
      }

    useEffect(() => {
        const hash = getHashValue('access_token');
        if(hash) {
            console.log(hash)
            localStorage.setItem("token", hash)
            navigate(LOBBY_ROUTE)
        }
    },[])

    return (
        <div className={styles.container}>
        </div>
    )
}

export default observer(Login)