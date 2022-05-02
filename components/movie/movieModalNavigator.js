// icons
import { AiOutlineLeftCircle } from "react-icons/ai";
import ContactForm from "../contactForm";
import Subscriptions from "./movieSubscriptions";

export default function ModalNavigator({ navigator, route, theme }) {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            margin: "64px auto",
            width: 400,
            height: 620,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.background,
            // border: "1px solid red",
        },
    };
    const renderItem = (routeName) => {
        switch (routeName) {
            case "Form":
                return <ContactForm theme={theme} callback={navigator} />;
            default:
                return <Subscriptions theme={theme} />;
        }
    };
    return (
        <div style={styles.container}>
            <div onClick={() => navigator((prev) => !prev)}>
                <AiOutlineLeftCircle size={40} color="white" />
            </div>
            <div>{renderItem(route)}</div>
        </div>
    );
}
