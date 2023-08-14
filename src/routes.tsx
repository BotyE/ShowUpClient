import {ADMIN_ROUTE, HOME_ROUTE, LOBBY_ROUTE, LOGIN_ROUTE, MAFIA_ROUTE, SUPER_ADMIN_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import SuperAdmin from "./pages/SuperAdmin";
import Admin from "./pages/Admin";
import Login from "./pages/Login";



export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: <Home />
    },

    {
        path: LOBBY_ROUTE,
        Component: <Lobby />
    },

    {
        path: SUPER_ADMIN_ROUTE,
        Component: <SuperAdmin />
    },

    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },

    {
        path: LOGIN_ROUTE,
        Component: <Login />
    },

    {
        path: MAFIA_ROUTE,
        Component: <Admin />
    },
]