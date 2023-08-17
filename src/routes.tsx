import {ADMIN_ROUTE, BUNKER_ROUTE, FAKE_THAT_ROUTE, HOME_ROUTE, LOBBY_ROUTE, LOGIN_ROUTE, MAFIA_ROUTE, MANAGE_ROUTE, MODERATE_ROUTE, PODCAST_ROUTE, SUPER_ADMIN_ROUTE, WHOAMI_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import SuperAdmin from "./pages/SuperAdmin";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Mafia from "./pages/games/Mafia";
import Bunker from "./pages/games/Bunker";
import Podcast from "./pages/games/Podcast";
import Fake from "./pages/games/Fake";
import WhoAmI from "./pages/games/WhoAmI";
import ManageMafia from "./pages/manageGames/ManageMafia";
import ModerateMafia from "./pages/moderateGames/ModerateMafia";
import MafiaAdmin from "./pages/adminGames/MafiaAdmin";



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
        path: MAFIA_ROUTE + "/:id",
        Component: <Mafia />
    },

    {
        path: BUNKER_ROUTE,
        Component: <Bunker />
    },

    {
        path: PODCAST_ROUTE,
        Component: <Podcast />
    },

    {
        path: FAKE_THAT_ROUTE,
        Component: <Fake />
    },

    {
        path: WHOAMI_ROUTE,
        Component: <WhoAmI />
    },

    {
        path: MANAGE_ROUTE + MAFIA_ROUTE + "/:id",
        Component: <ManageMafia />
    },

    {
        path: MODERATE_ROUTE + MAFIA_ROUTE + "/:id",
        Component: <ModerateMafia />
    },

    {
        path: SUPER_ADMIN_ROUTE + MAFIA_ROUTE ,
        Component: <MafiaAdmin />
    },
]