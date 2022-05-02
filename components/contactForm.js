import Spacer from "./movie/movieSpacer";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ContactForm({ theme, callback }) {
    const [loading, setLoading] = useState({ isLoading: false, color: "red" });
    const styles = {
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 400,
            height: 620,
            borderRadius: 5,
            backgroundColor: theme.backgroundColor,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            // border: "1px solid red",
        },
        input: {
            width: "90%",
            borderWidth: 0,
            borderRadius: 5,
            fontSize: 18,
            height: 30,
            width: "90%",
        },
        msg: {
            width: "90%",
            borderWidth: 0,
            borderRadius: 5,
            fontSize: 18,
            width: "90%",
            height: 100,
        },
        btn: {
            backgroundColor: theme.buttonLarge,
            color: "#FFFFFF",
            alignItems: "center",
            width: "90%",
            height: 50,
            padding: 5,
            borderRadius: 30,
            border: 0,
            cursor: "pointer",
        },
        label: {
            color: "#808080",
            alignSelf: "flex-start",
            margin: "0px 0 -10px 40px",
        },
        disclosure: {
            fontSize: 14,
            margin: "5px 40px 5px 40px",
            color: "grey",
        },
        loader: {
            display: "flex",
            justifyContent: "center",
            marginTop: 250,
        },
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const SERVICE_ID = "service_af8wtm3";
        const TEMPLATE_ID = "template_56au859";
        const PUBLIC_KEY = "JTd49SKCYVRSBP9RA";
        // next.js => e.target.name.value => Getting value from input
        setLoading((state) => ({ ...state, isLoading: true }));
        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                e.target,
                PUBLIC_KEY
            );
            // sending user to main page
            if (callback) callback((prev) => !prev);
            // console.log(email);
        } catch (error) {
            console.log("Error: ", error);
        }
        // next.js =>  e.target.reset() => Resetting input values
        e.target.reset();
        setLoading({ isLoading: false, color: "green" });
    };
    return (
        <>
            {loading.isLoading ? (
                <div style={styles.loader}>
                    <ClipLoader size={100} color={loading.color} />
                </div>
            ) : (
                <form style={styles.form} onSubmit={sendEmail}>
                    <p style={{ color: theme.fontColor, fontSize: 30 }}>
                        Contact Me
                    </p>
                    <label style={styles.label}>Your Name</label>
                    <Spacer />
                    <input
                        style={styles.input}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="your name"
                    />
                    <Spacer />
                    <label style={styles.label}>Your Email</label>
                    <Spacer />
                    <input
                        style={styles.input}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        placeholder="to jctcabrera@outlook.com"
                    />
                    <Spacer />
                    <label style={styles.label}>Message to Developer</label>
                    <Spacer />
                    <input
                        style={styles.msg}
                        id="message"
                        name="message"
                        type="text"
                        autoComplete="msg"
                        required
                        placeholder="message"
                    />
                    <Spacer />
                    <button style={styles.btn}>Send Message</button>
                    {/* <p style={styles.disclosure}>
                    This app is for public demonstration and potential employers
                    only. Emails and passwords are not shared with anyone and
                    are only visible to the developer. App created by James
                    Cabrera 2022.
                </p> */}
                </form>
            )}
        </>
    );
}
