export default function WeatherForecast({ data }) {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: 200,
            color: "#FFFFFF",
        },
        middle: {
            display: "flex",
            flexDirection: "row",
        },
    };
    const forecastDays = {
        days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        conditions: ["Sunny", "Rainy", "Cloudy", "Windy", "Stormy"],
        temp: [90, 54, 67, 97, 54],
    };
    // console.log(data);

    return (
        <div style={styles.container}>
            <div style={styles.middle}>
                {forecastDays.days.map((item, i) => (
                    <p
                        style={{ margin: "10px 10px" }}
                        key={Math.random(1) * 11}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
