import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import styles from "../style.module.css"
import ramka from "../../assets/ramka.png"
import { Image } from "antd";

interface Player {
    login: string,
    display_name: string
}

interface Play {
    index: number,
    user: Player
}

const MafiaCam = ({user, index}: Play) => {

    return (
        <div style={{position: "relative",width: "24%", aspectRatio: "16/9", margin: "10px 0px", backgroundColor: "white", height: "auto", display:"flex"}}>
                            <video id={user.login} style={{position: "absolute", width: "100%", height: "100%"}} autoPlay></video> 
                            <div style={{ width:"100%", height: "20%", position: "absolute", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.2)", display:"flex", justifyContent:"center", alignItems:"center"}}> 
                                <p style={{fontFamily:"Monsterat"}}>{index+1}. {user.display_name}</p>
                            </div>   
                            
                            <Image  style={{position: "relative", width: "101%", aspectRatio: "16/9"}}  src={ramka}  preview={false}/>                       
                        
                        </div>
    )
}

export default observer(MafiaCam);