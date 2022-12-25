import React from 'react';

import { useGlobalContext } from '../../../context/AppContext';
import styles from "./scss/footerBooton.module.scss"

const FooterBootom = () => {
  const { openMenu, setOpenMenu } = useGlobalContext()

  return (
    openMenu && <div className={styles.footerBotton_container}>
      <button>LANGUAGE</button>
      <button>GET HELP</button>
      <button onClick={() => setOpenMenu(false)}>EXIT</button>

    </div>

  )
}

export default FooterBootom;