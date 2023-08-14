import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./style.module.css"


const DefualtText = () => {


    return (
        <p className={styles.text}>Show UP Войдите, чтобы зайти в лобби.</p>
    )
}

export default observer(DefualtText);