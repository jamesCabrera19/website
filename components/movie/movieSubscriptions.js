import React, { useState, useContext, useEffect } from "react";
import { Context as AuthContext } from "../../context/movieAuthContext";

import Spacer from "./movieSpacer";

const Modal = () => {
    return (
        <input
            style={{
                fontSize: 18,
                border: `1px solid grey`,
                borderRadius: 3,
                outline: "none",
                position: "absolute",
                height: 100,
                width: 300,
                zIndex: 1000,
            }}
            id="email"
            name="email"
            type="text"
            autoComplete="email"
            required
            placeholder="password"
        />
    );
};

export default function Subscriptions({ theme }) {
    const { state, addCredits } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [credits, setCredits] = useState(0);

    const handlePurchase = (e) => {
        e.preventDefault();
        setShowModal(true);
        const user = {
            email: state.email,
            token: state.token,
            credits,
        };
        addCredits(user);
    };

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
            width: 360,
            height: 50,
            padding: 5,
            borderRadius: 30,
            border: 0,
            backgroundColor: theme.buttonLarge,
            color: state.credits > 1 ? "#FFFFFF" : "grey",
            cursor: "pointer",
        },
        selector: {
            height: 45,
            width: 360,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 6px",
            backgroundColor: "#F2F2F7",
            borderBottom: `1px solid ${theme.borderColor}`,
            borderRadius: 4,
        },
        selectInput: {
            border: `1px solid ${theme.borderColor}`,
            borderRadius: 4,
            background: "transparent",
            fontSize: 16,
            width: 50,
        },
        input: {
            fontSize: 18,
            width: 340,
            border: `1px solid ${theme.borderColor}`,
            borderRadius: 3,
            // backgroundColor: "transparent",
            outline: "none",
        },
    };

    return (
        <div style={styles.container}>
            <p style={{ color: "#FFFFFF" }}>{state.email}</p>
            <Spacer />
            <p style={{ color: "#FFFFFF" }}>
                You have{" "}
                <span style={{ fontWeight: "700" }}>{state.credits} </span>
                credits left
            </p>
            <Spacer />

            <form
                value={credits}
                onChange={(e) => setCredits(parseInt(e.target.value))}
                onSubmit={(e) => handlePurchase(e)}
            >
                <div style={styles.selector}>
                    <p>Add credits to your account</p>
                    <select
                        // value={credits}
                        style={styles.selectInput}
                        name="number"
                    >
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <Spacer />
                {showModal && <Modal />}
                <Spacer />
                <button
                    style={styles.btn}
                    disabled={state.credits > 1 ? false : true}
                >
                    Add Credits
                </button>
            </form>
        </div>
    );
}
