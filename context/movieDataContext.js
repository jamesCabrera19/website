import createDataContext from "./main";
import popular from "../api/popular";
//
const movieDataReducer = (state, action) => {
    switch (action.type) {
        case "init_state":
            return action.payload; // true state
        case "clicked_movie":
            return [...state, { clickedMovie: action.payload }];
        default:
            return state;
    }
};
const fetchMovies = (dispatch) => async () => {
    try {
        console.log("fetchMovies RAN");
        const res = await popular.get();
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
