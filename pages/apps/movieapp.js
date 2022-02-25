import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { Context as ColorContext } from "../../context/colorScheme";
import { Context as MovieContext } from "../../context/movieDataContext";
// import { Provider as MovieDataProvider } from "../../context/movieDataContext"; // better solution found
// import Movie from "./movieapp/[movie]"; // better solution found
// import { useRouter } from "next/router"; // better solution found
import SideBar from "../../components/movieSidebar";
import MovieResults from "../../components/movieResults";

function App({ theme }) {
    const { state, fetchMovies, clickedMovie } = useContext(MovieContext);
    const { footerOptions } = useContext(ColorContext);
    const [sidebar, setSidebar] = useState(false);
    const [modal, setModal] = useState(false);
    const movies = state.slice(0, 15);

    // * fixed => <Movie/> bug => goes out of focus in full screen.
    // * fixed  => create a result component to show similar movies
    // todo => create video component
    // * fixed  => add <Share/>, <Play/>, buttons
    // todo => add bottom navbar to movie app?

    useEffect(() => {
        footerOptions(theme.background);
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

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "stretch",
            padding: "64px 0",
            backgroundColor: theme.background, // used if image fails to load
        },
    };

    return (
        <>
            <div style={styles.container}>
                <SideBar />
                <MovieResults state={movies} callback={clickedMovie} />
            </div>
            <div
                style={{
                    width: "80%",
                    height: 1,
                    borderBottom: "1px solid #8E8E8E",
                    margin: "64px auto -100px auto",
                }}
            ></div>
        </>
    );
}

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
