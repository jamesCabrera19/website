import React, { useState, useContext } from "react";
import { Context as AuthContext } from "../../context/movieAuthContext";
//
import Spacer from "./movieSpacer";
//
//
const ModalPopUp = (props) => {
    const { state, addCredits } = useContext(AuthContext);
    const [password, setPassword] = useState("");

    const handlePurchase = (e, type) => {
        e.preventDefault();

        const User = {
            email: state.email,
            password: password,
            token: state.token,
            credits: props.credits,
        };
        if (type === "purchase") {
            addCredits(User);
            if (props.errorMessage === undefined) {
                console.log("success");
                props.modal(false);
            } else {
                console.log("failure: ", props.errorMessage);
            }
            props.modal(false);
        }
        return props.modal(false);
    };

    const styles = {
        container: {
            height: 200,
            width: 300,
            // border: "1px solid red",
            position: "fixed",
            margin: "90px 0 0 0px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgb(202, 202, 202)",
            borderRadius: 20,
        },
        input: {
            fontSize: 18,
            width: 250,
            height: 30,
            border: `0px solid grey`,
            borderRadius: 5,
            backgroundColor: "#FFFFFF",
            outline: "none",
        },
        btnContainer: {
            height: 40,
            width: 300,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignSelf: "flex-end",
            marginTop: 21,
        },
        btnRight: {
            border: "1px solid rgb(187, 187, 187)",
            borderBottomRightRadius: 20,
            backgroundColor: "transparent",
            color: "blue",
            width: 150,
            cursor: "pointer",
        },
        btnLeft: {
            border: "1px solid rgb(187, 187, 187)",
            borderRight: "0px solid rgb(187, 187, 187)",
            borderBottomLeftRadius: 20,
            backgroundColor: "transparent",
            color: "blue",
            width: 150,
            cursor: "pointer",
        },
    };

    return (
        <div style={styles.container}>
            <h3>Enter password</h3>
            <p>Confirm Credits: {props.credits}</p>
            <form
                onSubmit={(e) => handlePurchase(e, "purchase")}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <input style={styles.input} placeholder="Password" />
                <div style={styles.btnContainer}>
                    <button
                        style={styles.btnLeft}
                        onClick={(e) => handlePurchase(e, "cancel")}
                    >
                        Cancel
                    </button>
                    <button
                        style={styles.btnRight}
                        onClick={(e) => handlePurchase(e, "purchase")}
                    >
                        Purchase
                    </button>
                </div>
            </form>
        </div>
    );
};

export default function Subscriptions({ theme }) {
    const { state } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [credits, setCredits] = useState(1);
    //
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
    //
    return (
        <div style={styles.container}>
            <p style={{ color: "#FFFFFF" }}>{state.email}</p>
            <Spacer />
            {state.errorMessage ? (
                <p style={{ color: "#FFFFFF" }}>{state.errorMessage}</p>
            ) : (
                <p style={{ color: "#FFFFFF" }}>
                    You have{" "}
                    <span style={{ fontWeight: "700" }}>{state.credits} </span>
                    credits left
                </p>
            )}

            <Spacer />
            <>
                <div style={styles.selector}>
                    <p>Add credits to your account</p>
                    <select
                        onChange={(e) => setCredits(parseInt(e.target.value))}
                        disabled={showModal ? true : false}
                        style={styles.selectInput}
                        value={credits}
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
                <button
                    disabled={showModal ? true : false}
                    onClick={() => setShowModal(true)}
                    style={styles.btn}
                >
                    Add Credits
                </button>
            </>
            {showModal && <ModalPopUp credits={credits} modal={setShowModal} />}
        </div>
    );
}
