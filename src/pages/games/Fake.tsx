import { observer } from "mobx-react-lite";
import React from "react";
import styles from "../styles/home.module.css"


const Fake = () => {

    return (
        <div className={styles.container}>
        </div>
    )
}

export default observer(Fake)