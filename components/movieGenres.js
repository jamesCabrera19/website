import React, { useRef, useContext } from "react";

import Image from "next/image";

import { Context as MovieContext } from "../context/movieDataContext";
import ScrollerBtn from "./movieScroller";
import leftArrow from "../imgs/left-arrow.svg";
import rightArrow from "../imgs/right-arrow.svg";

export default function MovieGenres(props) {
    const { state, fetchMoviesByGenre } = useContext(MovieContext);
    const scroller = useRef();
    const slide = (amount) => (scroller.current.scrollLeft += amount);

    const styles = {
        container: {
            // border: "1px solid red",
            display: "flex",
            flexDirection: "row",
            margin: "70px 0",
            overflow: "scroll",
            backgroundColor: props.theme.backgroundColor, // dark // used if image fails to load
        },
        card: {
            margin: "0 10px 0 10px",
            minWidth: "150px",
            maxWidth: "150px",
            height: 150,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
            // border: "1px solid red",
        },
        title: {
            position: "absolute",
            zIndex: 1,
            left: 115,
            color: props.theme.fontColor,
            fontWeight: props.theme.fontWeight,
        },
        image: {
            width: "100%",
        },
    };

    return (
        <>
            <h3 style={styles.title}>{props.title}</h3>
            <ScrollerBtn
                type={leftArrow}
                title="left"
                callback={() => slide(-100)}
                position="115px 0"
            />
            <ScrollerBtn
                type={rightArrow}
                title="right"
                callback={() => slide(100)}
                position="115px 0"
            />
            <div style={styles.container} ref={scroller}>
                {props.state.map((item, i) => {
                    let _image = item.name.toLowerCase();
                    if (_image === "science fiction") {
                        _image = "sci-fi";
                    } else if (_image === "tv movie") {
                        _image = "tvmovie";
                    }

                    return (
                        <div
                            key={Math.random() * 9999}
                            style={styles.card}
                            onClick={() => {
                                fetchMoviesByGenre(item.id);
                                window.scrollTo({
                                    top: 1900,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <Image
                                src={
                                    require(`../imgs/movieApp/${_image}.jpg`)
                                        .default.src
                                }
                                alt={_image}
                                layout="fill"
                                priority
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
