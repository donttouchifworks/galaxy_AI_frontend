import header from "../../components/basic/header.module.scss"
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const useMenu = (routes, parentPath = '') => {
    return useMemo(() => {
        const renderMenu = (routes, parentPath = '') => {
            return routes.map((item, index) => {
                if(item.showInMenu){
                    return (
                        <div key={index}>
                            <Link className={header.header__navLinks} to={`${parentPath}${item.path}`}>
                                {item.name}
                            </Link>
                        </div>
                    )
                } else if(item.children && item.children.length > 0 ){
                    return (
                        renderMenu(item.children, `${parentPath}${item.path}/`)
                    )
                }
            })
        };
        return renderMenu(routes, parentPath);
    }, [routes, parentPath]);
};

export default useMenu;

