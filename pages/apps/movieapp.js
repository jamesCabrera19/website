import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { Context as MovieContext } from "../../context/movieDataContext";
import Movie from "./movieapp/[movie]";
import { useRouter } from "next/router";

export default function MovieApp() {
    const { state, fetchMovies, clickedMovie } = useContext(MovieContext);
    const [modal, setModal] = useState(false);
    const movies = state.slice(0, 15);

    // todo => <Movie/> bug => goes out of focus in full screen.
    // todo => create a result component to show similar movies
    // todo => create video component
    // todo => add <Share/>, <Play/>, buttons
    // todo => add bottom navbar to movie app?

    useEffect(() => {
        fetchMovies();
        // autoSignin()
        return () => {
            // screen is unfocused => Clean State
            // cleanState() // resets movie data state,
            // console.log("themeSwitch ran");
        };
    }, []);
    // console.log(movies[0].poster_path);
    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            // border: "1px solid red",
            // marginTop: 64,
            justifyContent: "center",
            alignItems: "center",
            // backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies[0].backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingTop: 100,
            // from iOS app
            backgroundColor: "rgb(42, 44, 51)", // used if image fails to load
            // borderRadius: 10,
        },
        card: {
            margin: "10px auto 10px auto",
            minWidth: "250px",
            maxWidth: "250px",
            height: 373,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            // border: "1px solid red",
            borderRadius: 10,
            // marginTop: 150,
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
                {modal ? <Movie setModal={setModal} /> : null}
                {/* Link key={movie.id} href={`/apps/movieapp/`} DISABLE UNTIL FURTHER RESEARCH*/}
                {movies.map((movie) => {
                    return (
                        <div
                            key={Math.random() * 999}
                            style={styles.card}
                            onClick={() => {
                                clickedMovie(movie);
                                setModal(!modal);
                            }}
                        >
                            <img
                                style={styles.image}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
