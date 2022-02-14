import Link from "next/link";

export default function Navbar() {
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
const styles = {
    container: {
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "nowrap",
        justifyContent: "flex-start", // horizontal position
        alignItems: "center", // vertical position
        // alignContent: "stretch",
        height: 64,
        // backgroundColor: "#080724",
        alignSelf: "stretch",
        color: "white",
        // border: "1px solid red",
        marginTop: 15,
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
        fontWeight: 400,
    },
};
