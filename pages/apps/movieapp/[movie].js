// system imports
import { useEffect, useContext, useRef } from "react";
// import { useRouter } from "next/router";
// context
import { Context as MovieDataContext } from "../../../context/movieDataContext";
// hooks
import useFetch from "../../../hooks/useFetch";
// components
import MovieResults from "../../../components/movieResults";
import MovieShadow from "../../../components/movieShadowHOC";
import BigButton from "../../../components/movieButtons/bigButton";
import IconButton from "../../../components/movieButtons/IconButton";
import RegularBtn from "../../../components/movieButtons/regularButton";
//

const saveImage = async (event, movieTitle) => {
    // saves image to device
    const imageSrc = event.current.currentSrc;
    const res = await fetch(imageSrc, { method: "GET", headers: {} });
    const buffer = await res.arrayBuffer(); // creating the buffer
    const url = window.URL.createObjectURL(new Blob([buffer]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${movieTitle}.jpg`); // using default extension it can any other extension
    document.body.appendChild(link);
    link.click();
};
//
//
const setColor = (vote) => {
    let color;
    if (vote > 8) {
        color = "#00FF00";
    } else if (vote >= 8 || vote >= 7) {
        color = "orange";
    } else {
        color = "red";
    }
    return color;
};
//
//
const voteAverage = (value) => (Math.round(value) * 100) / 100;
//
//
export default function Movie({ modal, setModal, theme }) {
    // * const router = useRouter(); // not needed unless we use dynamic routing
    // * const { movie } = router.query; // Not in used => used for dynamic routing
    // const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch(true);
    const [fetchMovie, movies, errorMessage] = useFetch();

    // due to naming conventions mainly my own fault
    // there are two variables called clickedMovie.
    // one if a Function value setter
    // and the the second is the actual value
    // clickedMovie(movie), state.clickedMovie === actual movie value
    const { state, clickedMovie } = useContext(MovieDataContext);
    const imageRef = useRef();

    useEffect(() => {
        if (modal) {
            fetchMovie(state.clickedMovie.id);
            document.body.style.overflow = "hidden"; // removes background scroll
        }
    }, [state.clickedMovie]);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start", // makes img to show from top
            margin: "64px auto",
            paddingBottom: 10,
            width: "80%",
            height: "auto",
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.background, // dark
            //border: "1px solid red",
        },
        voteAverageBox: {
            width: 20,
            height: 20,
            marginTop: -7,
            backgroundColor: "#676767",
            borderColor: "#676767",
            borderRadius: 4,
            padding: "2px 5px",
            fontWeight: 600,
            color: setColor(state.clickedMovie.vote_average),
        },
        text: {
            marginBottom: 10,
            padding: 10,
            color: theme.fontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
            // border: "1px solid red",
        },
        iconWrapper: {
            display: "flex",
            justifyContent: "space-around",
        },
    };

    return (
        <MovieShadow modal={setModal}>
            <div style={styles.container}>
                <img
                    ref={imageRef}
                    style={styles.image}
                    src={`https://image.tmdb.org/t/p/original${state.clickedMovie.backdrop_path}`}
                />
                <h2 style={styles.text}>{state.clickedMovie.title}</h2>

                <p style={styles.text}>
                    Released {state.clickedMovie.release_date}, Rating{" "}
                    <span style={styles.voteAverageBox}>
                        {voteAverage(state.clickedMovie.vote_average)}
                    </span>
                </p>

                <BigButton title="Play" theme={theme} />
                <div style={styles.text}>
                    <p>{state.clickedMovie.overview}</p>
                </div>

                <div style={styles.iconWrapper}>
                    <IconButton action="add" movie={state.clickedMovie} />
                    <RegularBtn
                        type="download"
                        callback={() =>
                            saveImage(imageRef, state.clickedMovie.title)
                        }
                    />
                    <RegularBtn
                        type="share"
                        callback={() => console.log("download")}
                    />
                </div>
                <h3 style={styles.text}>More Like This</h3>
                <MovieResults
                    callback={clickedMovie}
                    state={movies}
                    theme={theme}
                    title=""
                />
            </div>
        </MovieShadow>
    );
}
