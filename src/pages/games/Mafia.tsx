import { observer } from "mobx-react-lite";
import React, { useContext, useEffect,useState } from "react";
import styles from "./styles/mafia.module.css"
import mafia from "../../assets/mafia.png"
import {Image} from "antd"
import { Context } from "../..";
import { getMafiaUsers, takeImage } from "../../http/userApi";
import MafiaCam from "../../components/games/MafiaCam";

interface Player {
    login: string,
    displayName: string,
    gameLead: boolean,
    profileImage: string
}


const Mafia = () => {

    const {user} = useContext(Context)

    const [wind, setWind] = useState<Array<Player>>([{
        login: "evelone192",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "dinablin",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "finargot",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "jesusavgn",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "welovegames",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "artistrng",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "general_hs_",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "keysie",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "botyep",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "mokrivskyi",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "teynor",
        displayName: "",
        gameLead: false,
        profileImage: ""
        },{
        login: "evelone2004",
        displayName: "",
        gameLead: true,
        profileImage: ""
        } ])

    function streamCamVideo() {
        var constraints = { video: { width: 1920, height: 1080 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            console.log(user.user.login)
            var video: HTMLVideoElement | null = document.querySelector("#"+user.user.login)
            if(video) {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
                if(video) video.play();
            };
            }
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); // always check for errors at the end.
      }



    useEffect( ()=> {
        getMafiaUsers(wind).then( (users) => setWind(users)).then(() => streamCamVideo())
    },[])

    return (
        <div className={styles.mafia_container} >
            <Image className={styles.logo} src={mafia}  preview={false}/>
            <div className={styles.playground}>
                {wind.map((elem, index) => {
                    let newIndex: string = (!elem.gameLead) ? index + 1 + "." : "Ведет игру -"
                        return <MafiaCam index={newIndex} userPlay={elem}/>
                    })}
            </div>
        </div>
    )
}

export default observer(Mafia)