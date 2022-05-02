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
        case "renderResult":
            return { ...state, maxResults: action.payload };

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
        // console.log(res.data.results);
        dispatch({
            type: "init_state",
            // payload: res.data.results.slice(0, 10),
            payload: res.data.results,
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
    // this function stores the clicked movie in state and is replace when other movie is clicked
};
const renderResult = (dispatch) => (intValue) => {
    dispatch({ type: "renderResult", payload: intValue });

    // this app is set to improve the performance of the app.
    // this function allows the user to set the min || max number of results to be displayed.
    // its default value is {10}.
    // the range of {renderResult} is min 10 to a max of 19.
    // this function can be called in the movieSettings components under <select/>
    // maxResults (int 10-19) is access by the MovieResults component to "slice" the set number of renderResults.
};

export const { Context, Provider } = createDataContext(
    movieDataReducer,
    {
        fetchMovies,
        saveMovie,
        fetchGenres,
        fetchMoviesByGenre,
        renderResult,
    }, // action Functions
    { main: [], genres: [], savedMovie: {} } // init STATE

    // { main: [], clickedMovie: {}, genres: [] } // init STATE
);
