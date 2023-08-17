import {makeAutoObservable} from "mobx";
import { IGameAdmin, IGameCreate, IStreamer } from "../utils/interfaces";
import { GameType } from "../utils/enums";
import { v4 } from "uuid";

export default class UserStore {
    _isAuth: boolean;
    _isBotyE: boolean;
    _user: {};
    _streamers: Array<IStreamer>;
    _gamesToCreate: Array<IGameCreate>;
    _gamesCreated: Array<IGameCreate>; 
    _gamesLobby: Array<IGameCreate>; 
    _gamesAdmin: Array<IGameAdmin>

    constructor() {
        this._isAuth = false
        this._isBotyE = false
        this._user = {}
        this._gamesToCreate = [{
            name: "Мафия",
            type: GameType.Mafia
        },{
            name: "Бункер",
            type: GameType.Bunker
        },{
            name: "Подкаст",
            type: GameType.Podcast
        }]

        this._streamers = [{
            name: "botyep",
            displayName: "BotyEP",
            enableGames: this._gamesToCreate
        },
        {
            name: "finargot",
            displayName: "finargot",
            enableGames: this._gamesToCreate
        },
        {
            name: "koneeshua",
            displayName: "Koneeeshua",
            enableGames: this._gamesToCreate
        }]

        this._gamesCreated = [{
            name: "Mafia",
            type: GameType.Mafia,
            link: GameType.Mafia + "-" + v4()
        }]

        this._gamesLobby = [{
            name: "Подкаст",
            type: GameType.Podcast,
            link: GameType.Podcast + "-" + v4()
        }]

        this._gamesAdmin = [{
            name: "Мафия",
            editable: true,
            type: GameType.Mafia
        },
        {
            name: "Подкаст",
            editable: false,
            type: GameType.Podcast
        },
        {
            name: "Бункер",
            editable: true,
            type: GameType.Bunker
        }]
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setIsAdmin(bool: boolean) {
        this._isBotyE = bool;
    }
      
    setUser(user : {}) {
        this._user = user;
    }

    setGamesCreated(games : Array<IGameCreate>) {
        this._gamesCreated = games;
    }

    setStreamers(streamers : Array<IStreamer>) {
        this._streamers = streamers;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
    get isBotyE() {
        return this._isBotyE;
    }

    get gamesToCreate() {
        return this._gamesToCreate;
    }

    get gamesCreated() {
        return this._gamesCreated;
    }

    get gamesAdmin() {
        return this._gamesAdmin;
    }

    get streamers() {
        return this._streamers;
    }
}