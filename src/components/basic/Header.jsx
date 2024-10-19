import {Link} from "react-router-dom";
import router from "../../router/index.jsx";
import header from "./header.module.scss"
import { Logo } from "./Logo.jsx"
import UseMenu from "../../hooks/menu/UseMenu.jsx";

export const Header = () => {
    const menu = UseMenu(router)
    return (
        <>
            <div className={header.header}>
                <div className={header.header__left}>
                    <div className={header.header__logo}>
                        <Logo />
                    </div>
                </div>

                <div className={header.header__right}>
                    <nav className={header.header__navigationContainer}>
                        {menu}
                    </nav>
                </div>

            </div>
        </>
    )
}