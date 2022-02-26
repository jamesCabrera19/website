import createDataContext from "./main";
import movieApi from "../api/movieApi";
//
const movieDataReducer = (state, action) => {
    switch (action.type) {
        case "init_state":
            return action.payload; // true state
        case "clicked_movie":
            return [...state, { clickedMovie: action.payload }];
        //colors[colors.length - 1] last item in array
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

const clickedMovie = (dispatch) => (movie) => {
    dispatch({ type: "clicked_movie", payload: movie });
};

export const { Context, Provider } = createDataContext(
    movieDataReducer,
    {
        fetchMovies,
        clickedMovie,
    }, // action Functions
    [] // init STATE
);
