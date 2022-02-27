// system imports
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
// icons
import { MdIosShare } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
// context
import { Context as MovieContext } from "../../../context/movieDataContext";
// hooks
import useFetch from "../../../hooks/useFetch";
// components
import Results from "../../../components/results";

//
export default function Movie({ modal, setModal, theme }) {
    // * const router = useRouter(); // not needed unless we use dynamic routing
    // const { movie } = router.query; // Not in used => used for dynamic routing
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch(true);
    const {
        state: { clickedMovie },
    } = useContext(MovieContext);

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
            // * enable for manual modal open
            setModal((prev) => !prev);
            // * disable for manual modal open
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
        buttons: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            height: 30,
            margin: "0 10px 10px 10px",
            borderRadius: 4,
            cursor: "pointer",
            color: theme.fontColor,
            fontFamily: theme.fontFamily,
            backgroundColor: theme.buttonLarge,
        },
        text: {
            marginBottom: 10,
            padding: 10,
            color: theme.fontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
        },
        icons: {
            width: 60,
            height: 40,
            borderRadius: 4,
            border: "1px solid rgb(230, 89, 137)", // same as theme.background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        iconWrapper: {
            display: "flex",
            justifyContent: "space-around",
        },
    };
    const icons = [AiOutlinePlus, BiDownload, MdIosShare]; // temp
    return (
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
                <div style={_styles.iconWrapper}>
                    {icons.map((Icon) => {
                        return (
                            <div key={Math.random() * 99} style={_styles.icons}>
                                <Icon size={30} color="rgb(230, 89, 137)" />
                            </div>
                        );
                    })}
                </div>
                <h3 style={_styles.text}>More Like This</h3>
                <Results state={movies} />
            </div>
        </div>
    );
}
