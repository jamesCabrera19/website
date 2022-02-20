import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
//

import { Context as MovieContext } from "../../../context/movieDataContext";
//
export default function Movie({ setModal }) {
    const router = useRouter();
    const { movie } = router.query; // Not in used => used for dynamic routing
    const { state } = useContext(MovieContext);
    const { clickedMovie } = state.slice(-1)[0];
    console.log(clickedMovie);

    const exitHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            setModal(false);
        }
    };
    const styles = {
        shadow: {
            width: "100%",
            minHeight: "100vh",
            overflowY: "scroll",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10,
        },
        container: {
            marginTop: 64,
            width: "80%",
            height: 1100,
            borderRadius: 10,
            backgroundColor: "white",
            position: "absolute",
            left: "10%",
            color: "black", //replace w context fontColor
            overflow: "hidden",
            // backgroundImage: `url(https://image.tmdb.org/t/p/original/${clickedMovie.poster_path})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            backgroundColor:
                "rgb(42, 44, 51)" /* Used if the image is unavailable */,
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        buttons: {
            backgroundColor: "rgb(230, 89, 137)",
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            margin: "0 10px 10px 10px",
            borderRadius: 4,
            color: "#FFFFFF",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        text: {
            marginBottom: 10,
            padding: 10,
            color: "#FFFFFF",
            fontWeight: "300",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
    };

    return (
        clickedMovie && (
            <div
                style={styles.shadow}
                onClick={(e) => exitHandler(e)}
                className="shadow"
            >
                <div style={styles.container}>
                    <img
                        style={{ width: "100%" }}
                        src={`https://image.tmdb.org/t/p/original/${clickedMovie.backdrop_path}`}
                    />
                    <h2 style={styles.text}>{clickedMovie.title}</h2>
                    <p style={styles.text}>
                        Released {clickedMovie.release_date}, Rating{" "}
                        {clickedMovie.vote_average}
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
                    <h3 style={styles.text}>More Like This</h3>
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
