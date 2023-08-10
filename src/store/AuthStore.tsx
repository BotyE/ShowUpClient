import React, {Component} from "react"
import {makeAutoObservable} from "mobx"

class AuthStore  {
    
    isAuth = false;
    

    constructor() {
        makeAutoObservable(this);
      }

}

export default AuthStore;