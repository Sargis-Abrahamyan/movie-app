import React from 'react';

import { useGlobalContext } from '../../../context/AppContext';
import search from '../../../../assets/icons/ICON - Search.png';
import styles from './scss/search.module.scss';

const Search = () => {
    const { openMenu } = useGlobalContext()

    return (
        <div className={styles.search}>
            <img src={search} alt="search" />
            {openMenu && <span className={styles.search_text}>Search</span>}

        </div>
    )
}

export default Search