import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { check } from './http/userApi';
import {Context} from "./index";

function App() {
  const {user} = useContext(Context)

  useEffect( () => {
    check().then( (data: any ) => {
      
      if(!data) {
        user.setIsAuth(false)
        user.setUser({})
      }
      else {
        const text = data.data[0]
        if(text.login) {
          user.setIsAuth(true)
          user.setUser(text)
        }
      }
    })
  })

  return (
    <BrowserRouter> 
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
