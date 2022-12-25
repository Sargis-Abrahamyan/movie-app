import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Genres from '../pages/genres/Genres';
import Home from '../pages/home/Home';
import Movies from './../pages/movies/Movies';
import TvShows from './../pages/tvShows/TvShows';
import WatchLater from '../pages/watchLater/WatchLater';

const RootRoutes = () => {

    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tvShows' element={<TvShows />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/genres' element={<Genres />} />
                <Route path='/watchLater' element={<WatchLater />} />
            </Routes>
        </div>
    )
}

export default RootRoutes