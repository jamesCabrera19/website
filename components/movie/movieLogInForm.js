import { useContext, useState } from "react";
// components
import Spacer from "./movieSpacer";
// context
import { Context as AuthContext } from "../../context/movieAuthContext";
// icons
import { AiOutlineLeftCircle, AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import DotLoader from "react-spinners/DotLoader";

export default function MovieForm({ props }) {
    const { state, signIn, signUp } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // next.js => e.target.name.value => Getting value from input
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoading((prev) => !prev);
        if (props.title === "Sign In") {
            signIn({ email, password });
        } else {
            signUp({ email, password });
        }
        e.target.reset();
        setLoading((prev) => !prev);
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            width: 400,
            height: 320,
            borderRadius: 10,
            // border: "1px solid red",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        inputWrap: {
            display: "flex",
            overflow: "hidden",
            backgroundColor: "white",
            border: "0px solid red",
            borderRadius: 3,
        },
        input: {
            fontSize: 18,
            width: 340,
            border: "0px solid red",
            borderRadius: 3,
            backgroundColor: "transparent",
            outline: "none",
        },
        icon: {
            fontSize: 30,
            alignSelf: "center",
            color: "black",
            borderRight: "1px solid grey",
            borderRadius: 0,
            marginRight: 5,
        },
    };

    return (
        <div style={styles.container}>
            {props.title === "Sign In" ? null : (
                <div onClick={() => props.setNavigator((prev) => !prev)}>
                    <AiOutlineLeftCircle
                        style={{ cursor: "pointer" }}
                        size={40}
                        color="white"
                    />
                </div>
            )}

            {/* <div style={{ alignSelf: "center", margin: "20px 0" }}>
                <DotLoader size={60} color="red" />
            </div> */}

            <form style={styles.form} onSubmit={onSubmit}>
                <h1
                    style={{
                        fontWeight: props.theme.fontWeight,
                        fontFamily: props.theme.fontFamily,
                        color: props.theme.fontColor,
                    }}
                >
                    {props.title}
                </h1>

                <div style={styles.inputWrap}>
                    <AiOutlineUser style={styles.icon} />
                    <input
                        style={styles.input}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        placeholder={props.emailPlaceholder}
                    />
                </div>
                <Spacer />
                <div style={styles.inputWrap}>
                    <BiLockAlt style={styles.icon} />
                    <input
                        style={styles.input}
                        id="password"
                        name="password"
                        type="text"
                        autoComplete="password"
                        placeholder={props.passwordPlaceholder}
                        required
                    />
                </div>
                <Spacer />
                <button>{props.buttonTitle}</button>
                {state.errorMessage ? (
                    <div>
                        <p>{state.errorMessage}</p>
                    </div>
                ) : null}

                {props.title === "Sign In" ? (
                    <div onClick={() => props.setNavigator((prev) => !prev)}>
                        <p
                            style={{
                                fontWeight: props.theme.fontWeight,
                                fontFamily: props.theme.fontFamily,
                                color: props.theme.authLink,
                                cursor: "pointer",
                            }}
                        >
                            Don't have and account? Sign up instead
                        </p>
                    </div>
                ) : null}
            </form>
        </div>
    );
}
