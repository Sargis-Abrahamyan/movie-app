import React from 'react';

import { useGlobalContext } from '../../context/AppContext';
import Carousel from './carousel/Carousel';
import Moviecontent from './movieContent/Moviecontent';
import styles from "./scss/homePage.module.scss"

const HomePage = () => {
    const { movieItems, movieId, } = useGlobalContext();
    const TendingNowFind = movieItems.find((movie) => movie.Id === movieId);

    return (
        <div className={styles.homepage_container} style={{ backgroundImage: movieId === "" ? undefined : `url(${require("../../../assets/" + TendingNowFind.CoverImage)})` }}>
            <main className={styles.main}>
                <Moviecontent TendingNowFind={TendingNowFind} />
                <Carousel />

            </main>
        </div>
    )
}

export default HomePage;