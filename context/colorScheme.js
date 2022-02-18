import colorSchemeContext from "./main";

const colorReducer = (state, action) => {
    switch (action.type) {
        case "dark_theme":
            return {
                ...state,
                backgroundColor: "#222121",
                sectionColor: "#1A1A1A",
                buttonDark: "",
                fontColor: "#8E8E8E",
                headingColor: "#F1F1F1",
            };
        case "nav_theme":
            return {
                ...state,
                headingColor: "#474747",
            };
        case "footer":
            return {
                ...state,
                footerColor: action.payload,
            };
        default:
            return state;
    }
};
const themeSwitch = (dispatch) => () => {
    dispatch({ type: "dark_theme" });
};
const navbarSwitch = (dispatch) => () => {
    dispatch({ type: "nav_theme" });
};
const footerOptions = (dispatch) => (color) => {
    dispatch({ type: "footer", payload: color });
};

export const { Context, Provider } = colorSchemeContext(
    colorReducer,
    { themeSwitch, navbarSwitch, footerOptions }, // action Functions
    {
        backgroundColor: "#FFFFFF",
        sectionColor: "#F5F5F5",
        buttonColor: "#505050",
        headingColor: "#474747",
        fontWeight: "400",
        fontColor: "#8E8E8E",
        buttonFontColor: "#FFFFFF",
        maxWidth: "",
        fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    } // init STATE
);
