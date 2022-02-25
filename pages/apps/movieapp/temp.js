import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MdIosShare } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Context as MovieContext } from "../../../context/movieDataContext";
import Results from "../../../components/results";
import useFetch from "../../../hooks/useFetch";
//
export default function Movie({ setModal, modal, styles }) {
    // todo => remove scroll indicator (it might look good on mac but what about windows)

    // const router = useRouter();
    // const { movie } = router.query; // Not in used => used for dynamic routing
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch(true);
    const { state } = useContext(MovieContext);
    const { clickedMovie } = state.slice(-1)[0];
    console.log(state);

    useEffect(() => {
        fetchMovie(null, clickedMovie.id);
        document.body.style.overflow = "hidden"; // removes background scroll
    }, [clickedMovie]);

    const exitHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            setModal(false);
            document.body.style.overflow = "auto"; // adds background scroll
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
            zIndex: 1,
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
                        style={styles.image}
                        src={`https://image.tmdb.org/t/p/original/${clickedMovie.backdrop_path}`}
                    />
                    <h2 style={styles.text}>{clickedMovie.title}</h2>
                    <p style={styles.text}>
                        Released {clickedMovie.release_date}, Rating{" "}
                        <span style={_styles.voteAverageBox}>
                            {Math.round(clickedMovie.vote_average * 100) / 100}
                        </span>
                    </p>
                    <div style={styles.buttons}>
                        <p>Play</p>
                    </div>
                    <div style={styles.buttons}>
                        <p>Download</p>
                    </div>

                    <div style={styles.text}>
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
                    <h3 style={styles.text}>More Like This</h3>
                    {modal ? <Results state={movies} /> : null}
                </div>
            </div>
        )
    );
}

// THIS WOULD BE THE VIDEO SCREEN COMPONENT
//  <div style={{ margin: "300px 0 0 0" }}>
// Video Component Here
// </div>
// <div
//     style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         height: 60,
//         borderWidth: 10,
//         borderColor: "1px solid red",
//         marginTop: 340,
//         backgroundColor: "rgb(42, 44, 51)",
//     }}
// >
//     <div style={{ backgroundColor: "rgb(235, 99, 149)" }}>
//         +
//     </div>
//     <div style={{ backgroundColor: "rgb(235, 99, 149)" }}>
//         share
//     </div>
//     <div style={{ backgroundColor: "rgb(235, 99, 149)" }}>
//         download
//     </div>
// </div>
