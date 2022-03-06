import React, { useContext } from "react";
import { Context as MovieContext } from "../context/movieDataContext";

const MovieResults = ({ state }) => {
    const { clickedMovie } = useContext(MovieContext);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                overflowX: "scroll",
            }}
        >
            {state.map((item) => {
                return (
                    <img
                        key={item.id}
                        style={{
                            margin: "0 10px",
                            height: 200,
                            width: 150,
                            borderRadius: 10,
                            cursor: "pointer",
                        }}
                        src={
                            "https://image.tmdb.org/t/p/w500/" +
                            item.poster_path
                        }
                        onClick={() => clickedMovie(item)} // stores value in context
                    />
                );
            })}
        </div>
    );
};
export default MovieResults;
