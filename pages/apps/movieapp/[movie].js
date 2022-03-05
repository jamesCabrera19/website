// system imports
import { useEffect, useContext, useRef } from "react";
// import { useRouter } from "next/router";

// context
import { Context as MovieContext } from "../../../context/movieDataContext";
import { Context as MovieActionContext } from "../../../context/movieActionsContext";
// hooks
import useFetch from "../../../hooks/useFetch";
// components
import Results from "../../../components/results";
import MovieShadow from "../../../components/movieShadowHOC";
import BigButton from "../../../components/movieButtons/bigButton";
import IconButton from "../../../components/movieButtons/IconButton";
import RegularBtn from "../../../components/movieButtons/regularButton";

export default function Movie({ modal, setModal, theme }) {
    // * const router = useRouter(); // not needed unless we use dynamic routing
    // * const { movie } = router.query; // Not in used => used for dynamic routing
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch(true);
    const {
        state: { clickedMovie },
    } = useContext(MovieContext);
    const imageRef = useRef();

    useEffect(() => {
        if (modal) {
            fetchMovie(null, clickedMovie.id);
            document.body.style.overflow = "hidden"; // removes background scroll
        }
    }, [clickedMovie]);

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

    const _styles = {
        shadow: {
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9,
        },
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
            color: setColor(clickedMovie.vote_average),
        },
        text: {
            marginBottom: 10,
            padding: 10,
            color: theme.fontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
        },
        iconWrapper: {
            display: "flex",
            justifyContent: "space-around",
        },
    };

    const saveImage = async (e, movieTitle) => {
        const imageSrc = e.current.currentSrc;
        const res = await fetch(imageSrc, { method: "GET", headers: {} });
        const buffer = await res.arrayBuffer(); // creating the buffer

        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute("download", `${movieTitle}.jpg`); // using default extension it can any other extension
        document.body.appendChild(link);
        link.click();
    };
    return (
        <MovieShadow modal={setModal}>
            <div style={_styles.container}>
                <img
                    ref={imageRef}
                    style={_styles.image}
                    src={`https://image.tmdb.org/t/p/original${clickedMovie.backdrop_path}`}
                />
                <h2 style={_styles.text}>{clickedMovie.title}</h2>

                <p style={_styles.text}>
                    Released {clickedMovie.release_date}, Rating{" "}
                    <span style={_styles.voteAverageBox}>
                        {Math.round(clickedMovie.vote_average * 100) / 100}
                    </span>
                </p>

                <BigButton title="Play" theme={theme} />
                <div style={_styles.text}>
                    <p>{clickedMovie.overview}</p>
                </div>

                <div style={_styles.iconWrapper}>
                    <IconButton action="add" movie={clickedMovie} />
                    <RegularBtn
                        type="download"
                        callback={() => saveImage(imageRef, clickedMovie.title)}
                    />
                    <RegularBtn
                        type="share"
                        callback={() => console.log("download")}
                    />
                </div>
                <h3 style={_styles.text}>More Like This</h3>
                <Results state={movies} />
            </div>
        </MovieShadow>
    );
}
