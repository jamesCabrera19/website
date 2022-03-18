export default function BigButton({ title, theme, callback }) {
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
            onClick={() => callback()}
        >
            <p>{title}</p>
        </div>
    );
}
