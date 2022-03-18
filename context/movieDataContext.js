import createDataContext from "./index";
import movieApi from "../api/movieApi";
//
const movieDataReducer = (state, action) => {
    switch (action.type) {
        case "init_state":
            // passing init state but main is rebuilt
            return { ...state, main: action.payload }; // true state
        case "clicked_movie":
            return { ...state, savedMovie: action.payload }; // move to  different reducer
        //colors[colors.length - 1] last item in array
        case "genres":
            return { ...state, genres: action.payload };
        case "moviesbygenre":
            return { ...state, moviesByGenre: action.payload };

        default:
            return state;
    }
};
const fetchMovies = (dispatch) => async () => {
    try {
        console.log("fetchMovies RAN");
        const res = await movieApi.get(
            "/discover/movie?sort_by=popularity.desc"
        );
        dispatch({
            type: "init_state",
            payload: res.data.results.slice(0, 10),
        });
    } catch (error) {
        console.log("fetchMovies ERROR");
    }
};
const fetchGenres = (dispatch) => async () => {
    // this function fetches only fetches movie genres' IDs and nothing else
    try {
        const { data } = await movieApi.get(
            "/genre/movie/list?&language=en-US"
        );
        dispatch({ type: "genres", payload: data.genres });
    } catch (error) {
        console.log("fetchGenres ERROR");
    }
};
const fetchMoviesByGenre = (dispatch) => async (movieID) => {
    // this function fetches only fetches movie genres' IDs and nothing else
    try {
        const res = await movieApi.get(
            `/discover/movie?&with_genres=${movieID}`
        );
        dispatch({
            type: "moviesbygenre",
            payload: res.data.results.slice(0, 10),
        });
    } catch (error) {
        console.log("fetchMoviesByGenre ERROR");
    }
};

const saveMovie = (dispatch) => (movie) => {
    dispatch({ type: "clicked_movie", payload: movie });
};

export const { Context, Provider } = createDataContext(
    movieDataReducer,
    {
        fetchMovies,
        saveMovie,
        fetchGenres,
        fetchMoviesByGenre,
    }, // action Functions
    { main: [], genres: [], savedMovie: {} } // init STATE

    // { main: [], clickedMovie: {}, genres: [] } // init STATE
);
