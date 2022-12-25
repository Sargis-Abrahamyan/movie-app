import React from 'react';

import { useGlobalContext } from '../../context/AppContext';
import Search from './search/Search';
import MenuLink from './menuLink/MenuLink';
import FooterBootom from './footerBottom/FooterBottom';
import styles from "./scss/sidebar.module.scss";

const Sidebar = () => {
    const { openMenu, setOpenMenu } = useGlobalContext()
    return (
        <div className={styles.sideBar_container}  >
            <nav className={`${styles.nav}  ${openMenu ? null : styles.nav_small}`} >
                <div className={styles.navBar} onMouseMove={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>
                    <div>
                        <Search />
                        <MenuLink />
                    </div>
                    <FooterBootom />
                </div>

            </nav>
        </div>
    )
}

export default Sidebar;


