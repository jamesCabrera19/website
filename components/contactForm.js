import Spacer from "./movie/movieSpacer";

export default function ContactForm({ theme, callback }) {
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
        },
        label: {
            alignSelf: "flex-start",
            margin: "0px 0 -10px 40px",
        },
        disclosure: {
            fontSize: 14,
            margin: "5px 40px 5px 40px",
            color: "grey",
        },
    };

    const onEnd = (e) => {
        e.preventDefault();

        const msgData = { name: "", email: "", msg: "" };
        // next.js => e.target.name.value => Getting value from input
        msgData.name = e.target.name.value;
        msgData.email = e.target.email.value;
        msgData.msg = e.target.msg.value;

        // console.log(msgData);
        // next.js =>  e.target.reset() => Resetting input values
        e.target.reset();
        // navigates user to search movies
        // * props.callback(msgData); === sendMessage(msgData)
    };
    return (
        <>
            <form style={styles.form} onSubmit={onEnd}>
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
                    placeholder="to James Cabrera"
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
                    placeholder="jctcabrera@outlook.com"
                />
                <Spacer />
                <label style={styles.label}>Message to Developer</label>
                <Spacer />
                <input
                    style={styles.msg}
                    id="msg"
                    name="msg"
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
        </>
    );
}
