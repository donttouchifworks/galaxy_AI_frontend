import {Link} from "react-router-dom";
import router from "../../router/index.jsx";
import header from "./header.module.scss"
import { Logo } from "./Logo.jsx"

export const Header = () => {
    return (
        <>
            <div className={header.header}>
                <div className={header.header__left}>
                    <div className={header.header__logo}>
                        <Logo />
                    </div>
                </div>

                <div className={header.header__right}>
                    <div className={header.header__navigationBar}>
                        <nav className={header.header__navigationContainer}>
                            {router.map((item, index)=>(
                                <Link className={header.header__navLinks} to={item.path} key={index}>{item.name}</Link>
                                ))
                            }
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}