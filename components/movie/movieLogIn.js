import { useState } from "react";
//
import MovieForm from "./movieLogInForm";

//
export default function MovieLogIn({ theme, setModal }) {
    const [navigator, setNavigator] = useState(true); // navigator switch

    const logInProps = {
        signIn: {
            emailPlaceholder: "test the app with -- test@movies.com",
            passwordPlaceholder: "test the app with -- password",
            buttonTitle: "Sign In",
            title: "Sign In",
            setNavigator,
            setModal,
            theme,
        },
        signUp: {
            emailPlaceholder: "email@movies.com",
            passwordPlaceholder: "password",
            buttonTitle: "Sign Up",
            title: "Sign Up",
            setNavigator,
            setModal,
            theme,
        },
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "300px auto",
            width: 400,
            height: 320,
            borderRadius: 10,
            backgroundColor: theme.inputColor,
            overflow: "hidden", // stops box scrolling
            // border: "1px solid red",
        },
        shadowLock: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9,
        },
    };

    return (
        <div style={styles.shadowLock}>
            <div style={styles.container}>
                {navigator ? (
                    <MovieForm props={logInProps.signIn} />
                ) : (
                    <MovieForm props={logInProps.signUp} />
                )}
            </div>
        </div>
    );
}
