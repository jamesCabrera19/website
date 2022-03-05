// system imports
import React, { useEffect, useContext, useState } from "react";
// import Link from "next/link"; // used for dynamic links
// context
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Context as MovieActionContext } from "../../context/movieDataContext";

import { Provider as MovieDataProvider } from "../../context/movieDataContext";
import { Provider as MovieActionProvider } from "../../context/movieDataContext";

import Movie from "./movieapp/[movie]"; // better solution found
// components
import MovieResults from "../../components/movieResults";
import LatestMovie from "../../components/movieLatest";
import SideBar from "../../components/movieSidebar";
import MovieGenres from "../../components/movieGenres";
import MovieSettings from "../../components/movieSettings";
// CSS
import _styles from "../../styles/movieApp.module.css";

const App = (props) => {
    const { state, fetchMovies, clickedMovie, fetchGenres } =
        useContext(MovieContext);
    const { footerOptions } = useContext(ColorContext);

    const { addToList } = useContext(MovieActionContext);

    const [modal, setModal] = useState({
        movieModal: false,
        settingsModal: false,
    });

    // searchMovies is copy of state hook useFetch()
    // This is needed because NextJS is only rendered ONCE when the app mounts.
    // this is also  avoids stale data.
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        footerOptions(props.theme.background); // background color changes
        if (state.main.length === 0) {
            fetchMovies(); // avoids calling the api multiple times
            fetchGenres();
        }
        return () => {
            // screen is unfocused => Clean State
            footerOptions(null); // reverting footer background color to main
            // cleanState() // resets movie data state,
        };
    }, []);

    const trendingMovie = (state) => {
        const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);
        return state[getRandomInt(9)];
    };

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
                    src={trendingMovie(state.main)}
                    width="original"
                    callback={clickedMovie}
                    setModal={setModal}
                />

                <MovieResults
                    state={state.main}
                    callback={clickedMovie}
                    setModal={setModal}
                    title="Popular Movies"
                    theme={props.theme}
                />
                <MovieResults
                    state={searchMovies}
                    callback={clickedMovie}
                    setModal={setModal}
                    title="Searched Movies"
                    theme={props.theme}
                />

                <MovieGenres
                    state={state.genres}
                    theme={props.theme}
                    title="Find by Genres"
                />
                {state.moviesByGenre ? (
                    <MovieResults
                        state={state.moviesByGenre}
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
