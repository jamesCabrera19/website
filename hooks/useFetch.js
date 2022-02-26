import { useState, useEffect } from "react";
import movieApi from "../api/movieApi";
//
export default (getSimilar) => {
    // * getSimilar:Boolean
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchMovie = async (text, movieID) => {
        // text is reserver for text input aka a search bar input => fetchMovie(null, 12345)
        try {
            let res;
            if (getSimilar && movieID) {
                res = await movieApi.get(
                    `/movie/${movieID}/similar?&language=en-US&page=1`
                );
                setMovies(res.data.results);
            } else {
                res = await movieApi.get(`/search/movie?&query=${text}`);
                setMovies(res.data.results.slice(0, 9));
            }
        } catch (error) {
            setErrorMessage("Something went wrong with useFetch");
        }
    };
    useEffect(() => {
        fetchMovie("Avengers"); // init value was only needed for iOS app
    }, []);

    return [fetchMovie, movies, errorMessage, setErrorMessage];
};
