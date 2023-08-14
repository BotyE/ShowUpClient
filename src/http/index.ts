import axios from "axios";

const $twitchHost = axios.create({
    baseURL: process.env.TWITCH_API_URL
})

const $host = axios.create({
    baseURL: process.env.TWITCH_API_URL
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    console.log(config)
    return config
}
    $twitchHost.interceptors.request.use(authInterceptor)


export {
    $host,
    $twitchHost,
}