import Home from "../pages/Home.jsx";
import {AboutUs} from "../pages/AboutUs.jsx";
import {authRoutes} from "./auth.jsx";
import {NotFoundPage} from "../pages/errors/NotFoundPage.jsx";

const router = [
    {
        path: '/',
        name: 'home',
        element: <Home />,
        showInMenu: true,
    },
    {
        path: '/about',
        name: 'about',
        element: <AboutUs />,
        showInMenu: true,
    },
    authRoutes,
    {
        path: "/*",
        element: <NotFoundPage />,
        showInMenu: false,
    }
]

export default router