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
            name: 'Login | Register',
            element: <Navigate to="/auth/login" />,
            showInMenu: true,
        },
        {
            path: 'login',
            name: 'login',
            element: <Login />,
            showInMenu: false,
        },
        {
            path: 'signup',
            name: 'signup',
            element: <Signup/>,
            showInMenu: false,
        }
    ]
}