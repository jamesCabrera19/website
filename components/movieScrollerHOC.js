import _styles from "../styles/movieApp.module.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function MovieScroller({ children, callback, styles_ }) {
    const styles = {
        btnLeft: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: styles_.left.margin,
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
        btnRight: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: styles_.right.margin,
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
    };

    return (
        <div style={styles_.container}>
            <div style={styles.btnLeft}>
                <AiOutlineLeftCircle
                    onClick={() => callback(-300)}
                    className={_styles.scroller}
                    size={50}
                />
            </div>
            {children}
            <div style={styles.btnRight}>
                <AiOutlineRightCircle
                    onClick={() => callback(300)}
                    className={_styles.scroller}
                    size={50}
                />
            </div>
        </div>
    );
}
