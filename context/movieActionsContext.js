import createDataContext from "./index";
//
const dataReducer = (state, action) => {
    switch (action.type) {
        case "remove_from_list":
            return state.filter((movie) => movie.id !== action.payload);
        case "add_to_list":
            return state.find((item) => item === action.payload)
                ? state
                : [...state, action.payload];
        case "check_add":
            return [...state, { track: true }];
        default:
            return state;
    }
};
const addToList = (dispatch) => (movie) => {
    try {
        // todo save movies to DB
        dispatch({ type: "add_to_list", payload: movie });
    } catch (error) {
        console.log(error);
        return null;
    }
};
const removeFromList = (dispatch) => (movieID) => {
    dispatch({ type: "remove_from_list", payload: movieID });
};
const checkMovie = (dispatch) => (movie) => {
    // console.log("Movie id: ", movie);
    // movie is just an id
    dispatch({ type: "check_add", payload: movie });
};

export const { Context, Provider } = createDataContext(
    dataReducer,
    {
        removeFromList,
        addToList,
        checkMovie,
    }, // action Functions
    [] // init STATE array[{movie}]
);
