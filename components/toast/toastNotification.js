import { useState } from "react";
import Toast from "./toast";
import _styles from "../../styles/movieApp.module.css";

export default function ToastNotification({ title, theme, callback, Icon }) {
    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = (type) => {
        switch (type) {
            case "Play":
                toastProperties = {
                    id: list.length + 1,
                    title: "Enjoy!",
                    description:
                        "Credit will be remove at the end of the movie",
                    backgroundColor: "#5cb85c",
                };
                break;
            case "Add":
                toastProperties = {
                    id: list.length + 1,
                    title: "Movie Added",
                    description: "Movie was added to my movies library",
                    backgroundColor: "#5bc0de",
                };
                break;
            case "Remove":
                toastProperties = {
                    id: list.length + 1,
                    title: "Movie was removed",
                    description: "Movie was removed from my movies",
                    backgroundColor: "red",
                };
                break;
            case "Download":
                toastProperties = {
                    id: list.length + 1,
                    title: "Saving Image",
                    description: "Image will be saved to device",
                    backgroundColor: "#5bc0de",
                };
                break;
            case "Share":
                toastProperties = {
                    id: list.length + 1,
                    title: "Sharing is caring",
                    description: "Sharing is only available on iOS app",
                    backgroundColor: "#abd7eb",
                };
                break;
            case "Success":
                toastProperties = {
                    id: list.length + 1,
                    title: "Purchase was successful",
                    description: "Your purchase is now available",
                    backgroundColor: "#13cc06",
                };
                break;

            default:
                toastProperties = [];
        }
        setList([...list, toastProperties]);
    };

    return (
        <>
            <div
                className={_styles.iconButton}
                style={theme}
                onClick={() => {
                    showToast(title);
                    callback();
                }}
            >
                {Icon ? (
                    <Icon size={30} color="rgb(230, 89, 137)" />
                ) : (
                    <p style={{ fontSize: 16, color: "#FFFFFF" }}>Play</p>
                )}
            </div>
            <Toast toastList={list} position="buttom-right" setList={setList} />
        </>
    );
}
