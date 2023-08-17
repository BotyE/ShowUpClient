import { observer } from "mobx-react-lite";
import React, { useContext, useEffect,useState } from "react";
import styles from "./styles/mafia.module.css"
import mafia from "../../assets/mafia.png"
import {Image} from "antd"
import { Context } from "../..";
import { takeImage } from "../../http/userApi";
import MafiaCam from "../../components/games/MafiaCam";

interface Player {
    login: string,
    display_name: string
}


const Mafia = () => {

    const {user} = useContext(Context)

    const [wind, setWind] = useState<Array<Player>>([{
        login: "evelone192",
        display_name: ""
        },{
        login: "dinablin",
        display_name: ""
        },{
        login: "finargot",
        display_name: ""
        },{
        login: "jesusavgn",
        display_name: ""
        },{
        login: "welovegames",
        display_name: ""
        },{
        login: "artistrng",
        display_name: ""
        },{
        login: "general_hs_",
        display_name: ""
        },{
        login: "keysie",
        display_name: ""
        },{
        login: "botyep",
        display_name: ""
        },{
        login: "botshow",
        display_name: ""
        },{
        login: "Teynor",
        display_name: ""
        },{
        login: "evelone2004",
        display_name: ""
        } ])
    function streamCamVideo() {
        var constraints = { video: { width: 1920, height: 1080 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
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
        streamCamVideo()

    },[user.user.login])

    useEffect( ()=> {
        wind.map( async (elem) => {
              await takeImage(elem.login).then((data) => {
                console.log(data.data[0].login)
                if(data) {
                    const text = data.data[0]
                    setWind( prev => [...prev.filter( (item) => item.login != elem.login), {
                        login: text.login,
                        display_name: text.display_name
                    }])
                    
            }})  })

    },[])

    return (
        <div className={styles.mafia_container} >
            <Image className={styles.logo} src={mafia}  preview={false}/>
            <div className={styles.playground}>
                {wind.map((elem, index) => <MafiaCam index={index} user={elem}/>)}
            </div>
        </div>
    )
}

export default observer(Mafia)