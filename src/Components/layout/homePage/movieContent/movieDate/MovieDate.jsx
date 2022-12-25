import React from 'react';
import { useGlobalContext } from '../../../../context/AppContext';

import styles from "./scss/movieDate.module.scss";

const MovieDate = ({ TendingNowFind }) => {
    const { movieId, Featured } = useGlobalContext()
    const { ReleaseYear, MpaRating, Duration } = Featured
    return (
        <div className={styles.movieDate_container}>
            <span className={styles.movieDate_items}>{movieId === "" ? ReleaseYear : TendingNowFind.ReleaseYear}</span>
            <span className={styles.movieDate_items}>{movieId === "" ? MpaRating : TendingNowFind.MpaRating}</span>
            <span className={styles.movieDate_items}>{movieId === "" ? Duration : TendingNowFind.Duration}</span>
        </div>

    )
}

export default MovieDate;