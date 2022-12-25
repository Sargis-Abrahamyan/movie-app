import { createContext, useContext, useState, useEffect } from "react";
import uniqid from "uniqid";

import data from "../data.json"
import home from "../../assets/icons/Group 46.png";
import tvShows from "../../assets/icons/Group 56.png";
import genres from "../../assets/icons/Group 53.png";
import moves from "../../assets/icons/Group 54.png";
import watchlater from "../../assets/icons/Group 47.png";

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [movieId, setMovieId] = useState(JSON.parse(sessionStorage.getItem("movieId")) || "");
    const [modalIsOpenAndClose, setModalIsOpenandClose] = useState(false);
    const { Featured, TendingNow } = data;
    const [movieItems, setMovieItems] = useState(JSON.parse(sessionStorage.getItem("moveItems")) || TendingNow);

    useEffect(() => {
        sessionStorage.setItem('movieId', JSON.stringify(movieId));

    }, [movieId])

    useEffect(() => {
        sessionStorage.setItem('moveItems', JSON.stringify(movieItems));

    }, [movieItems])

    const routeData = [
        {
            id: uniqid(),
            path: "/",
            name: "Home",
            icon: home
        },
        {
            id: uniqid(),
            path: "/tvshows",
            name: "TVShows",
            icon: tvShows
        },
        {
            id: uniqid(),
            path: "/movies",
            name: "Movies",
            icon: moves
        },
        {
            id: uniqid(),
            path: "/genres",
            name: "Genres",
            icon: genres
        },
        {
            id: uniqid(),
            path: "/watchlater",
            name: "WatchLater",
            icon: watchlater
        },
    ]

    return <AppContext.Provider value={{
        openMenu,
        setOpenMenu,
        movieId,
        setMovieId,
        Featured,
        movieItems,
        setMovieItems,
        modalIsOpenAndClose,
        setModalIsOpenandClose,
        routeData
    }}>

        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }


