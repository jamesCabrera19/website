import { useContext } from "react";
//
import { Context as ColorContext } from "../context/colorScheme";

export default function Footer() {
    const { state } = useContext(ColorContext);
    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center", // horizontal position in container
            alignItems: "center", // vertical position in container
            alignContent: "stretch",
            height: 164,
            alignSelf: "stretch",
            width: "100%",
            // position: "fixed",
            bottom: 0,
            backgroundColor: state.footerColor
                ? state.footerColor
                : state.sectionColor,
            color: state.fontColor,
        },
    };
    return (
        <>
            <footer style={styles.container}>
                <p style={{}}>© 2022 JAMES CABRERA. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}
