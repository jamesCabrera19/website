// import Link from "next/link";
// import React from "react";

const MovieResults = (props) => {
    const styles = {
        container: {
            // border: "1px solid red",
            display: "flex",
            flexDirection: "row",
            // flexWrap: "nowrap",
            // justifyContent: "center",
            // alignItems: "flex-start",
            // padding: "0 0",
            margin: "70px 0 0 0",
            overflow: "scroll",
            backgroundColor: "rgb(42, 44, 51)", // dark // used if image fails to load
            // zIndex: 2,
        },
        card: {
            margin: "0 10px 0 10px",
            minWidth: "250px",
            maxWidth: "250px",
            height: 373,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            // border: "1px solid red",
            borderRadius: 10,
        },
        image: {
            width: "100%",
            cursor: "pointer",
        },
    };

    //Link key={Math.random() * 999} href={`/apps/movieapp/${movie.id}`}
    // console.log("MovieResults Ref: ", ref);
    return (
        <>
            <h3
                style={{
                    position: "absolute",
                    zIndex: 1,
                    left: 115,
                }}
            >
                {props.title}
            </h3>
            <div style={styles.container}>
                {props.state.map((movie) => {
                    return (
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
