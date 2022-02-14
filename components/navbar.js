import { useContext } from "react";
import Link from "next/link";
//
import { Context as ColorContext } from "../context/colorScheme";

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
            alignSelf: "stretch",
            color: state.fontColorDark,
            // marginTop: 15,
        },
        home: {
            order: 1,
            flex: 1,
            alignSelf: "auto",
        },
        li: {
            listStyle: "none",
        },
        text: {
            fontWeight: state.fontWeight,
        },
    };

    return (
        <div style={styles.container}>
            <ul style={styles.home}>
                <li style={styles.li}>
                    <Link href="/">
                        <h3 style={styles.text}>Home</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <li style={{ paddingRight: 50, listStyle: "none" }}>
                    <Link href="/contact">
                        <h5 style={styles.text}>Contact</h5>
                    </Link>
                </li>
            </ul>
            <ul>
                <li style={styles.li}>
                    <Link href="/portfolio">
                        <h5 style={styles.text}>Portfolio</h5>
                    </Link>
                </li>
            </ul>
            <ul>
                <li style={styles.li}>
                    <Link href="/resume">
                        <h5 style={styles.text}>Resume</h5>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
