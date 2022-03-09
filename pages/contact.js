import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
const cards = [1, 2, 3, 4];
export default function Contact() {
    const _height = 300;
    const styles = {
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            // border: "1px solid blue",
            padding: 10,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
        card: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: _height,
            width: 180,
            marginRight: 5,
            border: "1px solid red",
        },
        btnLeft: {
            position: "absolute",
            top: _height * 0.5,
            left: 0,
            color: "#FFFFFF",
        },
        btnRight: {
            position: "absolute",
            top: _height * 0.5,
            right: 0,
            color: "#FFFFFF",
        },
    };
    return (
        <div style={{ display: "flex" }}>
            <div style={{ margin: "auto" }}>
                <div style={{ margin: "300px 0" }}>
                    <h3>Contact Page</h3>
                    <div style={styles.cardContainer}>
                        {cards.map((card) => {
                            return (
                                <div style={styles.card}>
                                    <p>{card}</p>
                                </div>
                            );
                        })}
                        <AiOutlineLeftCircle
                            size={30}
                            color="white"
                            style={styles.btnLeft}
                        />
                        <AiOutlineRightCircle
                            size={30}
                            style={styles.btnRight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
