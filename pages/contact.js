import { useContext } from "react";
import { Context as ColorContext } from "../context/colorScheme";
import ContactForm from "../components/contactForm";

export default function Contact() {
    const { state } = useContext(ColorContext);
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            margin: "100px auto 100px",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
        theme: {
            buttonLarge: state.buttonColor,
            backgroundColor: state.sectionColor,
        },
    };
    return (
        <div style={styles.container}>
            <ContactForm theme={styles.theme} />
        </div>
    );
}
