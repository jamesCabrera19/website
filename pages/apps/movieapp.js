import Link from "next/link";
import React, { useEffect, useContext, useState, useRef } from "react";
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
// import { Provider as MovieDataProvider } from "../../context/movieDataContext"; // better solution found
import Movie from "./movieapp/[movie]"; // better solution found
// import { useRouter } from "next/router"; // better solution found
import SideBar from "../../components/movieSidebar";
import MovieResults from "../../components/movieResults";
import Spacer from "../../components/movieSpacer";
import useFetch from "../../hooks/useFetch";
import LatestMovie from "../../components/movieLatest";

const App = (props) => {
    const { state, fetchMovies, clickedMovie } = useContext(MovieContext);
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch();

    const { footerOptions } = useContext(ColorContext);
    const [modal, setModal] = useState(false);
    const [searchMovies, setSearchMovies] = useState([]);

    const mainMovies = state.slice(0, 15);

    // * fixed => <Movie/> bug => goes out of focus in full screen.
    // * fixed  => create a result component to show similar movies
    // todo => create video component
    // todo => app should contain a minWidth size
    // * fixed  => add <Share/>, <Play/>, buttons
    // todo => add bottom navbar to movie app?
    // done => removed dynamic routing.  reason if link id is pasted there is no state thus crashing the app
    // * fixed movieApi file.

    useEffect(() => {
        footerOptions(props.theme.background); // background color changes
        if (state.length === 0) {
            fetchMovies(); // avoiding calling the api multiple times
        }
        return () => {
            footerOptions(null); // reverting footer background color to main
            // screen is unfocused => Clean State
            // cleanState() // resets movie data state,
            // console.log("themeSwitch ran");
        };
    }, []);

    const trendingMovie = (state) => {
        const getRandomInt = (maxInt) => Math.floor(Math.random() * maxInt);
        return state[getRandomInt(9)];
    };

    const styles = {
        container: {
            display: "flex",
            // flexDirection: "row",
            // justifyContent: "flex-start",
            // alignItems: "center",
            padding: "64px 0",
            backgroundColor: props.theme.background, // used if image fails to load
            //border: "1px solid green",
            overflow: "hidden", // stops <MovieResults/> from overflowing from the right side
            height: "auto",
        },
        sub: {
            // border: "1px solid red",
            overflow: "scroll", // allows scrolling only on <MovieResults/>
        },
    };

    return (
        <div style={styles.container}>
            <SideBar setSearch={setSearchMovies} />
            {modal ? <Movie modal={modal} setModal={setModal} /> : null}

            <div style={styles.sub}>
                <LatestMovie
                    src={trendingMovie(state)}
                    width="original"
                    callback={clickedMovie}
                    setModal={setModal}
                />

                <MovieResults
                    state={mainMovies}
                    callback={clickedMovie}
                    setModal={setModal}
                    title="Popular Movies"
                />

                <MovieResults
                    state={searchMovies}
                    callback={clickedMovie}
                    setModal={setModal}
                    title="Searched Movies"
                />
            </div>
        </div>
    );
};

export default function MovieApp() {
    const theme = {
        fontColor: "rgb(255, 255, 255)", // font color
        background: "rgb(42, 44, 51)", // dark
        buttonLarge: "rgb(230, 87, 137)",
        fontWeight: "300", // font weight
        fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    };

    return (
        <>
            <App theme={theme} />
        </>
    );
}
