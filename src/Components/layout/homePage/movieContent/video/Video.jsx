import React from 'react';

import { useGlobalContext } from '../../../../context/AppContext';
import styles from "./scss/video.module.scss"

const Video = ({ VideoUrl, TendingNowFind, handelModalAndClose }) => {

    const { modalIsOpenAndClose, movieId } = useGlobalContext()
    return (
        modalIsOpenAndClose && <div className={styles.video_container}>
            <div className={styles.video_modal} >
                <video controls>
                    <source src={movieId === "" ? VideoUrl : TendingNowFind.VideoUrl} />
                </video>
                <button className={styles.videoModal_close} onClick={handelModalAndClose}>X</button>
            </div>

        </div>
    )
}

export default Video