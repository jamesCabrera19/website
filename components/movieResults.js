import Link from "next/link";
import Image from "next/image";

import leftArrow from "../imgs/left-arrow.svg";
import rightArrow from "../imgs/right-arrow.svg";
import React, { useState, useRef } from "react";
import ScrollerBtn from "./movieScroller";

const ImageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500${src}`;

const MovieResults = (props) => {
    // const [position, setPosition] = useState(0);
    const scroller = useRef();
    const slide = (amount) => (scroller.current.scrollLeft += amount);

    const styles = {
        container: {
            // border: "1px solid red",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            margin: "70px 0 0 0",
            overflow: "scroll",
            backgroundColor: "rgb(42, 44, 51)", // dark // used if image fails to load
        },
        card: {
            margin: "0 10px 0 10px",
            minWidth: "250px",
            maxWidth: "250px",
            height: 373,
            overflow: "hidden",
            position: "relative",
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
            color: props.theme.fontColor,
            fontWeight: props.theme.fontWeight,
        },
    };
    //
    console.log("rendering");
    const memoizedCallback = React.useCallback(() => {
        return props.state.map((movie) => {
            return (
                // disable Link for modal manual open
                // Link key={Math.random() * 999} href={`/apps/movieapp/${movie.id}`}
                <div
                    key={Math.random() * 999}
                    style={styles.card}
                    onClick={() => {
                        props.callback(movie); // clickedMovie()
                        props.setModal((prev) => ({
                            ...prev,
                            movieModal: !prev.movieModal,
                        }));
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
        });
    }, [props.state]);

    return (
        <>
            <h3 style={styles.title}>{props.title}</h3>
            {props.state.length >= 3 ? (
                <>
                    <ScrollerBtn
                        type={rightArrow}
                        title="right"
                        callback={() => slide(100)}
                    />
                    <ScrollerBtn
                        type={leftArrow}
                        title="left"
                        callback={() => slide(-100)}
                    />
                </>
            ) : null}

            <div style={styles.container} ref={scroller}>
                {memoizedCallback()}
            </div>
        </>
    );
};

// using a memoizedCallback because this components is very big
// it may contain up to 20 items.
// using the memoizedCallback the App renders this component a total of 3 times.
// then
export default React.memo(MovieResults);
