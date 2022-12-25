import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useGlobalContext } from '../../../context/AppContext';
import styles from "./scss/menuLink.module.scss";

const MenuLink = () => {
    const { routeData, openMenu, setOpenMenu } = useGlobalContext();
    const { pathname } = useLocation();

    return (
        <ul className={styles.menu_contaniner}>
            {
                routeData.map((route) => {
                    return (
                        <li key={route.id} className={`${styles.li_navlink} ${pathname === route.path ? styles.active : undefined}`} style={{ borderRadius: openMenu ? "6px" : "41px" }}>
                            <Link to={`${route.path}`} className={styles.link_url} onClick={() => setOpenMenu(false)}>
                                <img src={route.icon} alt="navIcon" />
                                {openMenu && <span className={styles.linkurl_name}>{route.name}</span>}
                            </Link>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuLink