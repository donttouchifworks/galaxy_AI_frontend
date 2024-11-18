import {Outlet} from "react-router-dom";
import {Button} from "../components/uiKit/Button.jsx";
import { useNavigate, useLocation  } from "react-router-dom";


export const AuthPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const changeRoute = () => {
        console.log(location.pathname);
        if (location.pathname.match(/login/)) {
            navigate('/auth/signup')
        } else {
            navigate('/auth/login')
        }

    }
    return (
        <>
            <div className="authPage">
                <Button text={'Hello'} onClick={() => changeRoute()} />
                <Outlet/>
            </div>

        </>
    )
}