import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Context as MovieContext } from "../../../context/movieDataContext";
import useFetch from "../../../hooks/useFetch";
import { MdIosShare } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Results from "../../../components/results";

export default function Movie({ modal, setModal }) {
    // const router = useRouter(); // not needed unless we use dynamic routing
    // const { movie } = router.query; // Not in used => used for dynamic routing
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch(true);
    const { state } = useContext(MovieContext);
    const { clickedMovie } = state.slice(-1)[0];

    useEffect(() => {
        if (modal) {
            fetchMovie(null, clickedMovie.id);
            document.body.style.overflow = "hidden"; // removes background scroll
        }
    }, [clickedMovie]);

    const exitHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto"; // adds background scroll
            setModal((prev) => !prev);
            // router.push("/apps/movieapp"); // going back to prev screen => not needed unless we use dynamic routing
        }
    };
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
            backgroundColor: "rgb(42, 44, 51)", // dark
            overflow: "hidden",
            // border: "1px solid red",
        },
        voteAverageBox: {
            width: 20,
            height: 20,
            marginTop: -7,
            backgroundColor: "#676767",
            borderColor: "#676767",
            borderRadius: 4,
            padding: "2px 5px",
            fontWeight: 800,
            color: setColor(clickedMovie.vote_average),
        },
        buttons: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: 30,
            margin: "0 10px 10px 10px",
            borderRadius: 4,
            color: "rgb(255, 255, 255)", // font color
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",

            backgroundColor: "rgb(230, 87, 137)",
            cursor: "pointer",
        },
        text: {
            marginBottom: 10,
            padding: 10,
            color: "rgb(255, 255, 255)", // font color
            fontWeight: "300", // font weight
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
    };
    const icons = [AiOutlinePlus, BiDownload, MdIosShare]; // temp
    return (
        clickedMovie && (
            <div
                style={_styles.shadow}
                onClick={(e) => exitHandler(e)}
                className="shadow"
            >
                <div style={_styles.container}>
                    <img
                        style={_styles.image}
                        src={`https://image.tmdb.org/t/p/original/${clickedMovie.backdrop_path}`}
                    />
                    <h2 style={_styles.text}>{clickedMovie.title}</h2>
                    <p style={_styles.text}>
                        Released {clickedMovie.release_date}, Rating{" "}
                        <span style={_styles.voteAverageBox}>
                            {Math.round(clickedMovie.vote_average * 100) / 100}
                        </span>
                    </p>
                    <div style={_styles.buttons}>
                        <p>Play</p>
                    </div>
                    <div style={_styles.buttons}>
                        <p>Download</p>
                    </div>

                    <div style={_styles.text}>
                        <p>{clickedMovie.overview}</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        {icons.map((Icon) => {
                            return (
                                <div
                                    key={Math.random() * 99}
                                    style={{
                                        width: 60,
                                        height: 40,
                                        borderRadius: 4,
                                        border: "1px solid rgb(230, 89, 137)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Icon
                                        size={30}
                                        color={"rgb(230, 89, 137)"}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <h3 style={_styles.text}>More Like This</h3>
                    <Results state={movies} />
                </div>
            </div>
        )
    );
}
