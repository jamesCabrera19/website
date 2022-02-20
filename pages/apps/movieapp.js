import Link from "next/link";
import { useEffect, useContext } from "react";
import { Context as MovieContext } from "../../context/movieDataContext";
import { Provider as MovieDataProvider } from "../../context/movieDataContext";
import useMovie from "../../hooks/useMovie";
function App() {
    const { state, fetchMovies, clickedMovie } = useContext(MovieContext);
    // const { state, autoSignin } = useContext(AuthContext);

    useEffect(() => {
        fetchMovies();
        // autoSignin()
        return () => {
            // screen is unfocused => Clean State
            // cleanState() // resets movie data state,
            // console.log("themeSwitch ran");
        };
    }, []);
    console.log(state);
    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            border: "1px solid red",
            marginTop: 64,
            justifyContent: "center",
            maxWidth: 800,
            alignItems: "center",
        },
        card: {
            margin: "10px auto 10px auto",
            minWidth: "250px",
            maxWidth: "250px",
            height: 373,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            border: "1px solid red",
            borderRadius: 10,
        },
        image: {
            width: "100%",
            cursor: "pointer",
        },
        movieInfo: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1rem",
        },
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={styles.container}>
                {state.map((movie) => {
                    return (
                        <Link href={`/apps/movies/${movie.id}`}>
                            <div
                                style={styles.card}
                                onClick={() => clickedMovie(movie)}
                            >
                                <img
                                    style={styles.image}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default function MovieApp() {
    return (
        <MovieDataProvider>
            <App />
        </MovieDataProvider>
    );
}
