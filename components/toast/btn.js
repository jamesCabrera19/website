export default function Button({ children, handleClick, theme }) {
    return (
        <button
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                width: "100%",
                margin: "0 10px 10px 10px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                color: theme.fontColor,
                fontFamily: theme.fontFamily,
                backgroundColor: theme.buttonLarge,
            }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
