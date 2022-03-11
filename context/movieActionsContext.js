import createDataContext from "./index";
//

const initProps = {
    movie: {
        adult: false,
        backdrop_path: "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
        genre_ids: Array.from([28, 80, 18]),
        id: 414906,
        original_language: "en",
        original_title: "The Batman",
        overview:
            "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        popularity: 4598.244,
        poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        release_date: "2022-03-01",
        title: "The Batman",
        video: false,
        vote_average: 8.2,
        vote_count: 666,
    },
};

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
    [initProps.movie] // init STATE array[{movie}]
);
