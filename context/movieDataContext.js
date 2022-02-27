import createDataContext from "./main";
import movieApi from "../api/movieApi";
import movieGenresApi from "../api/movieGenresApi";
//
const movieDataReducer = (state, action) => {
    switch (action.type) {
        case "init_state":
            // passing init state but main is rebuilt
            return { ...state, main: action.payload }; // true state
        case "clicked_movie":
            return { ...state, clickedMovie: action.payload };
        //colors[colors.length - 1] last item in array
        case "genres":
            return { ...state, genres: action.payload };
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
        dispatch({ type: "init_state", payload: res.data.results });
    } catch (error) {
        console.log("fetchMovies ERROR");
    }
};
const fetchGenres = (dispatch) => async () => {
    try {
        const { data } = await movieApi.get(
            "/genre/movie/list?&language=en-US"
        );
        dispatch({ type: "genres", payload: data.genres });
    } catch (error) {
        console.log("fetchGenres ERROR");
    }
};

const clickedMovie = (dispatch) => (movie) => {
    dispatch({ type: "clicked_movie", payload: movie });
};

export const { Context, Provider } = createDataContext(
    movieDataReducer,
    {
        fetchMovies,
        clickedMovie,
        fetchGenres,
    }, // action Functions
    { main: [], clickedMovie: {}, genres: [] } // init STATE
);
