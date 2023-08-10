import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {publicRoutes} from "./routes";
import {observer} from "mobx-react-lite";
import AuthStore from './store/AuthStore';

const AppRouter = observer(() => {
    return (
        <div>
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} />
            )}
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        </div>
    );
});

export default AppRouter;