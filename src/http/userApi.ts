
import {$twitchHost} from "./index";

export const check = async () => {
    const url = 'https://id.twitch.tv/oauth2/validate';
    const token = localStorage.getItem("token")
    if(!token)
        return false;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const text = JSON.parse(await response.text());
    const user = takeImage(text.login);
return user
}

export const takeImage = async (login: string) => {

    const url = 'https://api.twitch.tv/helix/users?login='+login;
    const token = localStorage.getItem("token")
    const response = await fetch(url, {
        headers: {
            "Client-Id": "vewaf736q0yj5q9nzxcrlutndj783o",
            Authorization: `Bearer ${token}`,
        }
    })

    const text = await response.json();
    return text;
}
