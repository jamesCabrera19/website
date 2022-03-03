// system imports
import React, { useEffect, useContext, useState, Suspense } from "react";
import Link from "next/link";
// context
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Provider as MovieDataProvider } from "../../context/movieDataContext";
import Movie from "./movieapp/[movie]"; // better solution found
// components
import MovieResults from "../../components/movieResults";
import LatestMovie from "../../components/movieLatest";
import SideBar from "../../components/movieSidebar";
import MovieGenres from "../../components/movieGenres";
//import Spacer from "../../components/movieSpacer";
// hooks

const App = (props) => {
    const { state, fetchMovies, clickedMovie, fetchGenres } =
        useContext(MovieContext);
    const { footerOptions } = useContext(ColorContext);
    // copy of state hook useFetch()
    // This is needed because NextJS is only renders ONCE when the app mounts.
    // this is also  avoids stale data.
    const [searchMovies, setSearchMovies] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        footerOptions(props.theme.background); // background color changes

        if (state.main.length === 0) {
            fetchMovies(); // avoiding calling the api multiple times
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
            display: "flex",
            padding: "64px 0",
            overflow: "hidden", // stops <MovieResults/> from overflowing from the right side
            height: "auto",
            backgroundColor: props.theme.background, // used if image fails to load
            //border: "1px solid green",
        },
        sub: {
            overflow: "scroll", // allows scrolling only on <MovieResults/>
            // border: "1px solid red",
        },
    };

    return (
        <div style={styles.container}>
            <SideBar setSearch={setSearchMovies} theme={props.theme} />
            {modal ? (
                <Movie modal={modal} setModal={setModal} theme={props.theme} />
            ) : null}

            <div style={styles.sub}>
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
                <>
                    <MovieResults
                        state={searchMovies}
                        callback={clickedMovie}
                        setModal={setModal}
                        title="Searched Movies"
                        theme={props.theme}
                    />
                </>

                <>
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
                </>
            </div>
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
            <App theme={theme} />
        </MovieDataProvider>
    );
}
