import React, { useRef } from "react";
// import Link from "next/link";
import Image from "next/image";

import ScrollerBtn from "./movieScroller";

const ImageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500${src}`;
//
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const MovieResults = ({ state, callback, setModal, title, theme }) => {
    // const [position, setPosition] = useState(0);
    const scroller = useRef();
    const slider = (amount) => (scroller.current.scrollLeft += amount);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            margin: "70px 0 0 0",
            overflow: "hidden",
            backgroundColor: "rgb(42, 44, 51)", // dark // used if image fails to load,
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
        btnLeft: {
            position: "absolute",
            top: 373 * 0.5,
            left: 0,
            cursor: "pointer",

            // border: "1px solid red",
        },
        btnRight: {
            position: "absolute",
            top: 373 * 0.5,
            right: 0,
            cursor: "pointer",
        },
    };
    //
    // const memoizedCallback = React.useCallback(() => {
    //     return state.map((movie) => {
    //         return (
    //             // disable Link for modal manual open
    //             // Link key={Math.random() * 999} href={`/apps/movieapp/${movie.id}`}
    //             <div
    //                 key={Math.random() * 999}
    //                 style={styles.card}
    //                 onClick={() => {
    //                     callback(movie); // clickedMovie()
    //                     if (setModal) {
    //                         setModal((prev) => ({
    //                             ...prev,
    //                             movieModal: !prev.movieModal,
    //                         }));
    //                     }
    //                 }}
    //             >
    //                 {movie.poster_path ? (
    //                     // NextJS <Image/> fails/breaks if movie.poster_path is non existing
    //                     <Image
    //                         loader={ImageLoader}
    //                         src={movie.poster_path}
    //                         layout="fill"
    //                         alt="Movie Poster"
    //                     />
    //                 ) : (
    //                     // fallback
    //                     <img
    //                         style={styles.image}
    //                         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    //                     />
    //                 )}
    //             </div>
    //         );
    //     });
    // }, [state]);

    return (
        <>
            <h3 style={styles.title}>{title}</h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginRight: -40,
                        zIndex: 1,
                        // border: "1px solid blue",
                    }}
                >
                    <AiOutlineLeftCircle
                        color="#FFFFFF"
                        size={50}
                        onClick={() => slider(-300)}
                        // style={styles.btnRight}
                    />
                </div>
                <div style={styles.container} ref={scroller}>
                    {state.map((movie) => {
                        return (
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
                        );
                    })}
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginLeft: -40,
                        zIndex: 1,
                        cursor: "pointer",
                        // background: "red",
                        // // height: 50,
                        // width: 50,
                        // border: "1px solid blue",
                    }}
                >
                    <AiOutlineRightCircle
                        color="#FFFFFF"
                        size={50}
                        onClick={() => slider(300)}
                        // style={styles.btnLeft}
                    />
                </div>
            </div>
        </>
    );
};

// using a memoizedCallback because this components is very big
// it may contain up to 20 items.
// using the memoizedCallback the App renders this component a total of 3 times.
// then
export default MovieResults;
