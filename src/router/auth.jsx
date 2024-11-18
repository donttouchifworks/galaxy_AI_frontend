import {AuthPage} from "../pages/AuthPage.jsx";
import {Login} from "../components/auth/Login.jsx";
import {Signup} from "../components/auth/Signup.jsx";
import {Navigate} from "react-router-dom";

export const authRoutes = {
    path: '/auth',
    name: 'auth',
    element: <AuthPage />,
    showInMenu: false,
    children: [
        {
            path: '',
            name: 'Signup',
            element: <Navigate to="/auth/login" />,
            showInMenu: false,
        },
        {
            path: 'login',
            name: 'login',
            element: <Login />,
            showInMenu: true,
        },
        {
            path: 'signup',
            name: 'signup',
            element: <Signup/>,
            showInMenu: true,
        }
    ]
}