// system imports
import React, { useEffect, useContext, useState, useCallback } from "react";
// import Link from "next/link"; // used for dynamic links
// context
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Context as MovieActionContext } from "../../context/movieActionsContext";

import { Provider as MovieDataProvider } from "../../context/movieDataContext";
import { Provider as MovieActionProvider } from "../../context/movieActionsContext";

import Movie from "./movieapp/[movie]"; // better solution found
// components
import MovieResults from "../../components/movieResults";
import LatestMovie from "../../components/movieLatest";
import SideBar from "../../components/movieSidebar";
import MovieGenres from "../../components/movieGenres";
import MovieSettings from "../../components/movieSettings";
// CSS
import _styles from "../../styles/movieApp.module.css";
//
const trendingMovie = (state) => {
    const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);
    return state[getRandomInt(9)];
};
//
const App = (props) => {
    const { footerOptions } = useContext(ColorContext); // page theme
    const {
        state: { main, genres, moviesByGenre },
        fetchMovies,
        clickedMovie,
        fetchGenres,
    } = useContext(MovieContext); // app's api
    //
    const { state } = useContext(MovieActionContext);
    //
    const [modal, setModal] = useState({
        movieModal: false,
        settingsModal: false,
    }); // modal effect
    //
    const [searchMovies, setSearchMovies] = useState([]);
    // searchMovies is copy of state hook useFetch()
    // This is needed because NextJS is only rendered ONCE when the app mounts.
    // this is also  avoids stale data.

    useEffect(() => {
        footerOptions(props.theme.background); // background color changes
        if (main.length === 0) {
            fetchMovies(); // avoids calling the api multiple times
            fetchGenres();
        }
        return () => {
            // screen is unfocused => Clean State
            footerOptions(null); // reverting footer background color to main
            // cleanState() // resets movie data state,
        };
    }, []);

    const styles = {
        container: {
            padding: "64px 0",
            overflow: "hidden", // stops <MovieResults/> from overflowing from the right side
            backgroundColor: props.theme.background, // used if image fails to load
            //border: "1px solid green",
        },
        sub: {
            overflow: "scroll", // allows scrolling only on <MovieResults/>
            //border: "1px solid red",
        },
    };

    // const memoizedCallback = useCallback(() => {
    //     const trendingMovie = (state) => {
    //         const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);
    //         return state[getRandomInt(9)];
    //     };
    //     return trendingMovie(main);
    // }, [main]);

    // console.log(main);

    return (
        <div style={styles.container} className={_styles.parentContainer}>
            <SideBar
                theme={props.theme}
                setModal={setModal}
                setSearch={setSearchMovies}
            />
            {modal.movieModal ? (
                <Movie
                    modal={modal.movieModal}
                    setModal={setModal}
                    theme={props.theme}
                />
            ) : null}

            <div style={styles.sub} className={_styles.Movies}>
                <LatestMovie
                    src={trendingMovie(main)}
                    width="original"
                    callback={clickedMovie}
                    setModal={setModal}
                />

                <MovieResults
                    state={main}
                    callback={clickedMovie}
                    setModal={setModal}
                    title="Popular Movies"
                    theme={props.theme}
                />
                {state.length >= 1 ? (
                    <MovieResults
                        state={state}
                        callback={clickedMovie}
                        setModal={setModal}
                        title="My Movies"
                        theme={props.theme}
                    />
                ) : null}
                {searchMovies.length ? (
                    <MovieResults
                        state={searchMovies}
                        callback={clickedMovie}
                        setModal={setModal}
                        title="Movie Search"
                        theme={props.theme}
                    />
                ) : null}

                <MovieGenres
                    state={genres}
                    theme={props.theme}
                    title="Find by Genres"
                />
                {moviesByGenre ? (
                    <MovieResults
                        state={moviesByGenre}
                        callback={clickedMovie}
                        setModal={setModal}
                        title=""
                        theme={props.theme}
                    />
                ) : null}
            </div>
            {modal.settingsModal ? (
                <MovieSettings setModal={setModal} theme={props.theme} />
            ) : null}
        </div>
    );
};

export default function MovieApp() {
    const theme = {
        background: "rgb(42, 44, 51)", // dark
        navBarColor: "rgba(17, 17, 27, 0.6)",
        navBarFontColor: "rgb(230, 87, 137)",
        buttonLarge: "rgb(230, 87, 137)",
        fontColor: "rgb(255, 255, 255)", // font color
        fontWeight: "300", // font weight
        fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    };

    return (
        <MovieDataProvider>
            <MovieActionProvider>
                <App theme={theme} />
            </MovieActionProvider>
        </MovieDataProvider>
    );
}
