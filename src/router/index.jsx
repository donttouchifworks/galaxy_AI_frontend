import Home from "../pages/Home.jsx";
import {AboutUs} from "../pages/AboutUs.jsx";

const router = [
    {
        path: '/',
        name: 'home',
        element: <Home />
    },
    {
        path: '/about',
        name: 'about',
        element: <AboutUs />
    },
]

export default router