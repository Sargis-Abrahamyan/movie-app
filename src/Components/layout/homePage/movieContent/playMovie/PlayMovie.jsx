import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";

import styles from "./scss/playMovie.module.scss"

const PlayMovie = ({ handelModalAndClose }) => {
    return (
        <div className={styles.playMovie_container}>
            <button className={styles.movie_btn} onClick={handelModalAndClose}><AiFillCaretRight />Play</button>
            <button className={styles.movie_btn}>More Info</button>

        </div>
    )
}

export default PlayMovie;
