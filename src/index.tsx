import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from './store/store';

interface ThemeContext {
  user: any
}

export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Context.Provider value={{
    user: new UserStore()
}}>
    <App />
</Context.Provider>
);

