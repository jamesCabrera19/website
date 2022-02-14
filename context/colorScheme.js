import colorSchemeContext from "./main";

const colorReducer = (state, action) => {
    switch (action.type) {
        case "init_state":
            return action.payload;
        default:
            return state;
    }
};

export const { Context, Provider } = colorSchemeContext(
    colorReducer,
    {}, // action Functions
    {
        backgroundColorLight: "#FFFFFF",
        backgroundColorDark: "#222121",
        sectionLight: "#F5F5F5",
        sectionDark: "#1A1A1A",
        buttonLight: "#505050",
        buttonDark: "",
        headingColor: "#505050",
        fontWeight: "400",
        fontColorLight: "#8E8E8E",
        fontColorDark: "#080724",
        buttonFontColor: "#FFFFFF",
        maxWidth: "",
    } // init STATE
);
