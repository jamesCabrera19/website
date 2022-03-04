import _styles from "../styles/movieApp.module.css";

export default function ScrollerBtn({ type, callback, title, position }) {
    const styles = {
        scroller: {
            position: "absolute",
            margin: position ? position : "230px 0",
            borderRadius: 50,
            width: 60,
            height: 60,
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            float: title === "left" ? "left" : null,
            right: title === "left" ? null : 0,
            // border: "1px solid red",
        },
    };
    return (
        <div
            style={styles.scroller}
            onClick={() => callback()}
            className={_styles.scroller}
        >
            <img src={type.src} />
        </div>
    );
}
