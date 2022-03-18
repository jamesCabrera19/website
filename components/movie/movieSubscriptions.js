import { useState } from "react";
import Spacer from "./movieSpacer";

export default function Subscriptions({ theme }) {
    const [credits, setCredits] = useState(0);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 400,
            height: 620,
            margin: "100px 0 0 0",
            backgroundColor: theme.background,
            // border: "1px solid red",
        },
        btn: {
            alignItems: "center",
            width: "90%",
            height: 50,
            padding: 5,
            borderRadius: 30,
            border: 0,
            backgroundColor: theme.buttonLarge,
            color: credits > 1 ? "#FFFFFF" : "grey",
        },
    };
    return (
        <div style={styles.container}>
            <p>user email</p>
            <Spacer />
            <p>You have "state.credits" credits left</p>
            <Spacer />
            <p>Credit Selector</p>
            <Spacer />
            <button style={styles.btn} disabled={credits > 1 ? false : true}>
                Add Credits
            </button>
        </div>
    );
}
