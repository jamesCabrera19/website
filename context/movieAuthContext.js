import createDataContext from "./index";
import movieAuth from "../api/movieAuth";
//
const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            // true state {token, credits, userEmail} coming from API
            return {
                errorMessage: "",
                token: action.payload.token,
                email: action.payload.email,
                credits: action.payload.credits,
            };
        case "add_error":
            return {
                errorMessage: action.payload,
                token: null,
            };
        case "remove_error":
            return { ...state, errorMessage: null };
        default:
            return state;
    }
};

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const res = await movieAuth.post("/signin", { email, password });
            dispatch({ type: "login", payload: res.data });
        } catch (error) {
            // console.log(error.res.data);
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign in",
            });
        }
    };
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const res = await movieAuth.post("/signup", { email, password });
            dispatch({ type: "login", payload: res.data });
        } catch (error) {
            // console.log(error.res.data);
            dispatch({
                type: "add_error",
                payload: "Something went wrong with sign up",
            });
        }
    };
};
const clearError = (dispatch) => () => dispatch({ type: "remove_error" });

const signOut = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem("token");
        dispatch({ type: "logout" });
    } catch (e) {
        // remove error
        console.log(e);
    }
};

const removeCredits =
    (dispatch) =>
    async ({ amount, email, token }) => {
        try {
            const res = await movieAuth.post("/remove-credits", {
                credits: amount,
                email,
                token,
            });
            // dispatch the login function because the response sends back the user object with updated credits
            dispatch({ type: "login", payload: res.data });
        } catch (error) {
            dispatch({ type: "add_error" });
        }
    };

export const { Context, Provider } = createDataContext(
    authReducer,
    {
        signIn,
        signUp,
        clearError,
        removeCredits,
    }, // action Functions
    { token: null, credits: 0, email: null, errorMessage: "" } // init STATE
);
