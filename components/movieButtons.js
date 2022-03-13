function Buttons({ title, theme }) {
    // these are big buttons => ex. play and download
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                height: 30,
                margin: "0 10px 10px 10px",
                borderRadius: 4,
                cursor: "pointer",
                color: theme.fontColor,
                fontFamily: theme.fontFamily,
                backgroundColor: theme.buttonLarge,
            }}
        >
            <p>{title}</p>
        </div>
    );
}

function SquareButton({ title, Icon, options, callback, theme }) {
    const styles = {
        options: {
            borderTop: "1px solid red",
        },
        button: {
            height: 45,
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 6px",
            cursor: "pointer",
            backgroundColor: "#F2F2F7",
            // borderRight: "1px solid red",
            // borderLeft: "1px solid red",
            borderTop: options === "isTop" ? "1px solid transparent" : null,
            borderBottom: `1px solid ${theme.borderColor}`,
            borderTopLeftRadius: options === "isTop" ? 4 : null,
            borderTopRightRadius: options === "isTop" ? 4 : null,
            borderBottomRightRadius: options === "isBottom" ? 4 : null,
            borderBottomLeftRadius: options === "isBottom" ? 4 : null,
        },
        faded: {
            color: "rgba(107, 107, 107, 0.6)",
        },
    };
    if (Icon && callback) {
        return (
            <div style={styles.button} onClick={() => callback()}>
                <p>{title}</p>
                <Icon size={30} color="grey" />
            </div>
        );
    } else {
        return (
            <div style={styles.button}>
                <p style={styles.faded}>{title}</p>
            </div>
        );
    }
}

export { Buttons, SquareButton };
