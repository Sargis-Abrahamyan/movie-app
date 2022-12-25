import React from 'react';

import { useGlobalContext } from '../../../context/AppContext';
import Video from './video/Video';
import PlayMovie from './playMovie/PlayMovie';
import MovieDate from './movieDate/MovieDate';
import styles from "./scss/movieContent.module.scss";

const Moviecontent = ({ TendingNowFind }) => {
    const { Featured, movieId, setModalIsOpenandClose, modalIsOpenAndClose } = useGlobalContext()
    const { Title, Category, VideoUrl } = Featured;

    const handelModalAndClose = () => {
        setModalIsOpenandClose(!modalIsOpenAndClose);
    }

    return (
        <div className={styles.movieContent_container}>
            <h3 className={styles.category_title}>{movieId === "" ? Category : TendingNowFind.Category}</h3>
            <h1 className={styles.movie_title}>{movieId === "" ? Title : TendingNowFind.Title}</h1>

            <MovieDate TendingNowFind={TendingNowFind} />

            <p className={styles.movie_description}>
                Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
            </p>

            <PlayMovie handelModalAndClose={handelModalAndClose} />

            <Video
                VideoUrl={VideoUrl}
                TendingNowFind={TendingNowFind}
                handelModalAndClose={handelModalAndClose}
            />

        </div>
    )
}

export default Moviecontent