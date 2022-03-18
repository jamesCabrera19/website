// system imports
import React, { useEffect, useContext, useState } from "react";
// import Link from "next/link"; // used for dynamic links
// context
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Context as MovieActionContext } from "../../context/movieActionsContext";
//
import { Provider as MovieDataProvider } from "../../context/movieDataContext";
import { Provider as MovieActionProvider } from "../../context/movieActionsContext";
//
import Movie from "./movieapp/[movie]"; // better solution found
// components
import MovieResults from "../../components/movie/movieResults";
import LatestMovie from "../../components/movie/movieLatest";
import SideBar from "../../components/movie/movieSidebar";
import MovieGenres from "../../components/movie/movieGenres";
import MovieSettings from "../../components/movie/movieSettings";
// CSS
import _styles from "../../styles/movieApp.module.css";
import { darkTheme, lightTheme } from "../../components/movie/movieThemes";
//

const trendingMovie = (state) => {
    const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);
    return state[getRandomInt(9)];
};
//
const App = ({ theme, setTheme }) => {
    // * MovieActionContext is the app main API.
    // moviesByGenre are hidden by default,
    // however they can be fetched and displayed
    // when user clicks on the desired genre
    const {
        state: { main, genres, moviesByGenre },
        fetchMovies,
        saveMovie,
        fetchGenres,
    } = useContext(MovieContext);

    // * User saved movies plus other actions
    const { state } = useContext(MovieActionContext);

    // * modal settings
    // opens different windows and
    // navigates user to certain
    // locations in the page
    const [modal, setModal] = useState({
        movieModal: false,
        settingsModal: false,
        myMovies: false,
    });

    // searchMovies is copy of state hook useFetch()
    // This is needed to update  <MovieResults/> component and to avoid stale data
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        if (main.length === 0) {
            fetchMovies(); // avoids calling the api multiple times
            fetchGenres();
        }
    }, [main]);

    const styles = {
        container: {
            padding: "64px 0",
            overflow: "hidden", // stops <MovieResults/> from overflowing from the right side
            backgroundColor: theme.background, // used if image fails to load
            // border: "1px solid green",
        },
        sub: {
            overflow: "scroll", // allows scrolling only on <MovieResults/>
            //border: "1px solid red",
        },
    };

    return (
        <div style={styles.container} className={_styles.parentContainer}>
            <SideBar
                theme={theme}
                setModal={setModal}
                setSearch={setSearchMovies}
            />
            {modal.movieModal ? (
                <Movie
                    modal={modal.movieModal}
                    setModal={setModal}
                    theme={theme}
                />
            ) : null}

            <div style={styles.sub} className={_styles.Movies}>
                <LatestMovie
                    src={trendingMovie(main)}
                    width="original"
                    callback={saveMovie}
                    setModal={setModal}
                />

                <MovieResults
                    state={main}
                    callback={saveMovie}
                    setModal={setModal}
                    title="Popular Movies"
                    theme={theme}
                />

                {searchMovies.length ? (
                    // checking if search returned a value
                    // else we dont show anything
                    // populated by default
                    <MovieResults
                        state={searchMovies}
                        callback={saveMovie}
                        setModal={setModal}
                        title="Movie Search"
                        theme={theme}
                    />
                ) : null}

                {modal.myMovies && state.length ? (
                    <MovieResults
                        state={state} // state != MovieContext. state === MovieActionContext
                        callback={saveMovie}
                        setModal={setModal}
                        title="My Movies"
                        theme={theme}
                    />
                ) : null}

                <MovieGenres
                    state={genres}
                    theme={theme}
                    title="Find by Genres"
                />
                {moviesByGenre ? (
                    <MovieResults
                        state={moviesByGenre}
                        callback={saveMovie}
                        setModal={setModal}
                        title=""
                        theme={theme}
                    />
                ) : null}
            </div>
            {modal.settingsModal ? (
                <MovieSettings
                    modal={modal}
                    setModal={setModal}
                    theme={theme}
                    switchTheme={setTheme}
                />
            ) : null}
        </div>
    );
};

export default function MovieApp() {
    // footerOptions is part of the website
    // and not related to MovieApp in any way
    // the purpose of the footer is to change the footer
    // background color on Focus and unfocus
    const { footerOptions } = useContext(ColorContext);

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    useEffect(() => {
        footerOptions(
            theme === "light" ? lightTheme.background : darkTheme.background
        ); //  background color change
        // default background color "rgb(42, 44, 51)" === dark
        return () => {
            // screen is unfocused => Clean State
            footerOptions(null); // reverting footer background color to main
        };
    }, [theme]);
    return (
        <MovieDataProvider>
            <MovieActionProvider>
                {/* <App theme={theme.dark} /> */}
                <App
                    theme={theme === "light" ? lightTheme : darkTheme}
                    setTheme={toggleTheme}
                />
            </MovieActionProvider>
        </MovieDataProvider>
    );
}
