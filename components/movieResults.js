import Link from "next/link";
import leftArrow from "../imgs/left-arrow.svg";
import rightArrow from "../imgs/right-arrow.svg";
import React, { useEffect, useContext, useState } from "react";

const MovieResults = (props) => {
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
    const [position, setPosition] = useState(0);
    return (
        <>
            <h3 style={styles.title}>{props.title}</h3>
            <div
                style={{
                    position: "absolute",
                    margin: "230px 0",
                    borderRadius: 50,
                    right: 0,
                    width: 60,
                    height: 60,
                    zIndex: 1,
                    background: "#FFFFFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    // border: "1px solid red",
                }}
                onClick={() => {
                    console.log("position: ", position);
                    setPosition((prev) => prev + 10);
                    window.scrollTo(200, 0);
                }}
            >
                <img src={rightArrow.src} />
            </div>
            <div style={styles.container}>
                {props.state.map((movie) => {
                    return (
                        // disable Link for modal manual open
                        // Link key={Math.random() * 999} href={`/apps/movieapp/${movie.id}`}

                        <div
                            key={Math.random() * 999}
                            style={styles.card}
                            onClick={() => {
                                props.callback(movie); // clickedMovie()
                                props.setModal((prev) => !prev);
                            }}
                        >
                            <img
                                style={styles.image}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default MovieResults;
