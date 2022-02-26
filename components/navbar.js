import { useContext } from "react";
import Link from "next/link";
//
import { Context as ColorContext } from "../context/colorScheme";
import _styles from "../styles/buttons.module.css";

export default function Navbar() {
    const { state } = useContext(ColorContext);

    const styles = {
        container: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            //
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "nowrap",
            justifyContent: "flex-start", // horizontal position
            alignItems: "center", // vertical position
            height: 64,
            // alignSelf: "stretch",
            color: state.headingColor,
            zIndex: 100,
        },
        home: {
            order: 1,
            flex: 1,
        },
        li: {
            listStyle: "none",
            width: 60,
            cursor: "pointer",
        },
        text: {
            fontWeight: state.fontWeight,
        },
    };

    return (
        <div style={styles.container} className={_styles.nav}>
            <ul style={styles.home}>
                <li className={_styles.navLinks} style={styles.li}>
                    <Link href="/">
                        <h3 style={styles.text}>Home</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <li
                    className={_styles.navLinks}
                    style={{
                        paddingRight: 50,
                        listStyle: "none",
                        width: 60,
                        cursor: "pointer",
                    }}
                >
                    <Link href="/contact">
                        <h5 style={styles.text}>Contact</h5>
                    </Link>
                </li>
            </ul>
            <ul>
                <li className={_styles.navLinks} style={styles.li}>
                    <Link href="/resume">
                        <h5 style={styles.text}>Resume</h5>
                    </Link>
                </li>
            </ul>
            <ul>
                <li className={_styles.navLinks} style={styles.li}>
                    <Link href="/portfolio">
                        <h5 style={styles.text}>Portfolio</h5>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
