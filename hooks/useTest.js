import { useState } from "react";

export default (url) => {
    // const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [test, setTest] = useState("");

    const fetchData = async () => {
        try {
            // setStatus(true); // true
            window.setTimeout(() => {
                setTest(url);
            }, 3000);

            // setStatus(false); // false
        } catch (error) {
            setErrorMessage(error);
        }
    };

    // const fetchMovie = async (movieID) => {
    //     try {
    //         const res = await movieApi.get(
    //             `/movie/${movieID}/similar?&language=en-US&page=1`
    //         );
    //         setMovies(res.data.results.slice(0, 9));
    //     } catch (error) {
    //         setErrorMessage(error);
    //     }
    // };
    return [fetchData, test, errorMessage];
};
