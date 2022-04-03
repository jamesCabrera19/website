import { useState } from "react";
import movieApi from "../api/movieApi";

export default () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchMovie = async (movieID) => {
        try {
            const res = await movieApi.get(
                `/movie/${movieID}/similar?&language=en-US&page=1`
            );
            setMovies(res.data.results.slice(0, 9));
        } catch (error) {
            setErrorMessage(error);
        }
    };
    return [fetchMovie, movies, errorMessage];
};
