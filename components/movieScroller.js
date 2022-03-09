import _styles from "../styles/movieApp.module.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function MovieScroller({ children, callback }) {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "flex-end",
        },
        btnLeft: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "70px -40px 0 0",
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
        btnRight: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "70px 0px 0 -40px",
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
    };
    return (
        <div style={styles.scroller}>
            <div style={styles.btnLeft}>
                <AiOutlineLeftCircle
                    color="#FFFFFF"
                    size={50}
                    onClick={() => callback()}
                />
            </div>
            {children}
            <div style={styles.btnRight}>
                <AiOutlineRightCircle
                    color="#FFFFFF"
                    size={50}
                    onClick={() => callback()}
                />
            </div>
        </div>
    );
}
