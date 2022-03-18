import React, { useRef } from "react";
// import Link from "next/link";
import Image from "next/image";
////
import _styles from "../../styles/movieApp.module.css";
//
//
import MovieScroller from "./movieScrollerHOC";
//
const ImageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500${src}`;
//

const MovieResults = ({ state, callback, setModal, title, theme }) => {
    // const [position, setPosition] = useState(0);
    const scroller = useRef();
    const slider = (amount) => (scroller.current.scrollLeft += amount);
    // let stateLength = state.length || 1; // needed to display scrolling buttons

    const styles = {
        container: {
            display: "flex",
            justifyContent: "flex-start",
            // border: "1px solid red",
        },
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            margin: setModal ? "70px 0 0 0" : 0,
            overflow: "hidden",
            borderRadius: 10,
            // border: "1px solid red",
        },
        card: {
            margin: "0 10px",
            minWidth: setModal ? 250 : 150,
            height: setModal ? 373 : 200,
            overflow: "hidden",
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
            position: "relative",
            // border: "1px solid red",
        },
        image: {
            width: "100%",
        },
        title: {
            position: "absolute",
            zIndex: 1,
            left: 115,
            color: theme.fontColor,
            fontWeight: theme.fontWeight,
        },
        left: {
            margin: setModal ? "70px -40px 0 0" : "0px -40px 0 0",
        },
        right: {
            margin: setModal ? "70px 0px 0 -40px" : "0 0 0 -40px",
        },
    };

    return (
        <>
            <h3 style={styles.title}>{title}</h3>
            <MovieScroller styles_={styles} callback={slider}>
                <div style={styles.cardContainer} ref={scroller}>
                    {state.map((movie) => (
                        // disable Link for modal manual open
                        // Link key={Math.random() * 999} href={`/apps/movieapp/${movie.id}`}
                        <div
                            key={Math.random() * 999}
                            style={styles.card}
                            onClick={() => {
                                callback(movie); // clickedMovie()
                                if (setModal) {
                                    setModal((prev) => ({
                                        ...prev,
                                        movieModal: !prev.movieModal,
                                    }));
                                }
                            }}
                        >
                            {movie.poster_path ? (
                                // NextJS <Image/> fails/breaks if movie.poster_path is non existing
                                <Image
                                    loader={ImageLoader}
                                    src={movie.poster_path}
                                    layout="fill"
                                    alt="Movie Poster"
                                />
                            ) : (
                                // fallback
                                <img
                                    style={styles.image}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </MovieScroller>
        </>
    );
};

export default React.memo(MovieResults);
