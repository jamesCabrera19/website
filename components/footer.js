export default function Footer() {
    return (
        <>
            <footer style={styles.container}>
                <p style={{}}>© 2022 JAMES CABRERA. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center", // horizontal position in container
        alignItems: "center", // vertical position in container
        alignContent: "stretch",
        height: 164,
        backgroundColor: "rgb(34, 33, 33)", //day => "#F5F5F5", // night=>  "rgb(34, 33, 33)"
        color: "#FFFFFF",
        alignSelf: "stretch",
        // position: "fixed",
        width: "100%",
        left: 0,
        bottom: 0,
    },
};
