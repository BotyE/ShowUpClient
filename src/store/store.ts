import {makeAutoObservable} from "mobx";

export default class UserStore {
    _isAuth: boolean;
    _isBotyE: boolean;
    _user: {}

    constructor() {
        this._isAuth = false
        this._isBotyE = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }

    setIsAdmin(bool: boolean) {
        this._isBotyE = bool
    }
      
    setUser(user : {}) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get isBotyE() {
        return this._isBotyE
    }
}