export default function MovieShadow({ children, modal }) {
    const exitHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto"; // adds background scroll
            // * enable for manual modal open
            modal((prev) => ({
                ...prev,
                movieModal: false,
                settingsModal: false,
            }));
            // * disable for manual modal open
            // router.push("/apps/movieapp"); // going back to prev screen => not needed unless we use dynamic routing
        }
    };
    const _styles = {
        shadow: {
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9,
        },
    };
    return (
        <div
            style={_styles.shadow}
            onClick={(e) => exitHandler(e)}
            className="shadow"
        >
            {children}
        </div>
    );
}
