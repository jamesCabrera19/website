import { useState } from "react";
import movieApi from "../api/movieApi";

export default () => {
    // * getSimilar:Boolean
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

    // useEffect(() => {
    //     fetchMovie(926899); // init value
    // }, []); // not needed because nothing is fetch when app is mounted

    return [fetchMovie, movies, errorMessage];
};
