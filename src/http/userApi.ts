
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
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
        headers: {
            "Client-Id": "vewaf736q0yj5q9nzxcrlutndj783o",
            Authorization: `Bearer ${token}`,
        }
    })

    const text = await response.json();
    return text;
}

export const getMafiaUsers = async (users: any) => {
    const mafiaUsers: String[] = users.reduce( (arr: String[], user: any, index: number) => {
        if( index === 0 ) return [user.login];
        return [...arr, '&login=' + user.login];
    }, [])

    const loginList = mafiaUsers.join('');

    const userList = await takeImage(loginList);
    const usersData = userList.data;

    return users.reduce( (arr: any, user: any, index: number) => {
        let userData = usersData.find( (data: any) => data.login === user.login);

        return [...arr, {
            login: user.login,
            displayName: (userData) ? userData.display_name : "Пустой слот",
            gameLead: user.gameLead,
            profileImage: (userData) ? userData.profile_image_url : ""
        }]
    }, [])




}
