import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";

import { useGlobalContext } from '../../../context/AppContext';
import "./swiperCss/style.css";
import styles from './scss/carousel.module.scss'

const Carousel = () => {
    const { movieItems, setMovieItems, setMovieId } = useGlobalContext();

    const moveChange = (Id) => {
        let firstMoveItem;
        const filteredMoveItems = movieItems.filter((movie) => {
            if (movie.Id === Id) {
                firstMoveItem = [movie];
                return false;
            }
            return true;
        });
        setTimeout(() => {
            setMovieItems([...firstMoveItem, ...filteredMoveItems]);
            setMovieId(Id)

        }, 2000)
    };

    return (
        <div className={styles.carousel_container}>
            <h2 className={styles.carousel_title}>Trending Now</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 40,
                    },
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="mySwiper"
            >

                {
                    movieItems.map((moveImg) => {
                        return (
                            <SwiperSlide key={moveImg.Id}>
                                <img
                                    src={require("../../../../assets/" + moveImg.CoverImage)}
                                    alt="Move Images"
                                    onClick={() => moveChange(moveImg.Id)} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </div>
    )
}

export default Carousel