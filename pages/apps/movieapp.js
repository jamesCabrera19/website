// system imports
import React, { useEffect, useContext, useState } from "react";
// import Link from "next/link"; // used for dynamic links
// context
import { Context as AuthContext } from "../../context/movieAuthContext";
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Context as MovieActionContext } from "../../context/movieActionsContext";
//
import { Provider as AuthProvider } from "../../context/movieAuthContext";
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
import MovieLogIn from "../../components/movie/movieLogIn";
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
    // * USER DATA => Auth Log In
    const {
        state: { token, errorMessage, userMovies },
    } = useContext(AuthContext);

    // * MovieActionContext is the app main API.
    // moviesByGenre results are hidden by default,
    // however, each genre can be fetched and displayed
    // when user clicks on the desired genre
    const {
        state: { main, genres, moviesByGenre },
        fetchMovies,
        saveMovie,
        fetchGenres,
        renderResult,
    } = useContext(MovieContext);

    // * User saved movies plus other actions
    const { state, addMovies } = useContext(MovieActionContext);

    // * modal settings
    const [modal, setModal] = useState({
        // opens different windows and
        // navigates user to certain
        // locations in the page
        movieModal: false,
        settingsModal: false,
        myMovies: false,
    });
    // searchMovies is copy of state hook useFetch()
    // This is needed to update  <MovieResults/> component and to avoid stale data
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        if (main.length === 0) {
            renderResult(10);
            fetchMovies(); // avoids calling the api multiple times
            fetchGenres();
        }
    }, [main]);

    useEffect(() => {
        addMovies(userMovies); // appeding movies to local state
    }, [userMovies]);

    const styles = {
        container: {
            padding: "64px 0",
            overflow: "hidden", // stops <MovieResults/> from overflowing
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
            {token ? null : (
                <>
                    <MovieLogIn theme={theme} error={errorMessage} />
                </>
            )}

            <SideBar
                theme={theme}
                setModal={setModal}
                setSearch={setSearchMovies}
            />

            {modal.movieModal ? (
                <Movie modal={modal} setModal={setModal} theme={theme} />
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
                        // state={state} // state != MovieContext. state === MovieActionContext
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
    // is not related to MovieApp in any way
    // the purpose of the footer is to change the footer
    // background color on Focus and unfocus
    const { footerOptions } = useContext(ColorContext);

    const [theme, setTheme] = useState("dark"); // theme initial value
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
        <AuthProvider>
            <MovieDataProvider>
                <MovieActionProvider>
                    <App
                        theme={theme === "light" ? lightTheme : darkTheme}
                        setTheme={toggleTheme}
                    />
                </MovieActionProvider>
            </MovieDataProvider>
        </AuthProvider>
    );
}
