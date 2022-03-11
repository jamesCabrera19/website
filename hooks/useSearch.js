import { useState, useEffect } from "react";
import movieApi from "../api/movieApi";
//
export default () => {
    // * getSimilar:Boolean
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchMovies = async (text) => {
        // text is reserver for text input aka a search bar input => fetchMovie(null, 12345)
        try {
            const res = await movieApi.get(`/search/movie?&query=${text}`);
            setMovies(res.data.results.slice(0, 9));
        } catch (error) {
            setErrorMessage("Something went wrong with useSearch");
        }
    };

    useEffect(() => {
        fetchMovies("Monster"); // init value
    }, []);

    return [fetchMovies, movies, errorMessage];
};
