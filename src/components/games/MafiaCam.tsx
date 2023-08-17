import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import styles from "./styles/games.module.css"
import ramka from "../../assets/ramka.png"
import { Image } from "antd";
import { Context } from "../..";

interface Player {
    login: string,
    displayName: string,
    profileImage: string
}

interface Play {
    index: string,
    userPlay: Player
    
}

const MafiaCam = ({userPlay, index}: Play) => {

    return (
        <div className={styles.camera_container}>
                            <video id={userPlay.login} className={styles.video} autoPlay></video> 
                            <div className={styles.bottom_field}> 
                                <Image className={styles.profile_image} src={userPlay.profileImage} preview={false}/>
                                <p>{index} {userPlay.displayName}</p>
                            </div>   
                            
                            <Image  style={{position: "relative", width: "101%", aspectRatio: "16/9"}}  src={ramka}  preview={false}/>                       
                        
                        </div>
    )
}

export default observer(MafiaCam);