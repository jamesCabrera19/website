import { useEffect, useState, useCallback } from "react";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

const RoundValue = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

export default function WeatherCurrent({ data, unit }) {
    // data === first item of the forecast array(40)
    const [temperature, setTemperature] = useState({
        main: 0.0,
        second: 0.0,
        max: 0.0,
        min: 0.0,
    });
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "#FFFFFF",
            // border: "1px solid red",
        },
        sub: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        description: { margin: "20px 20px 0 20px", fontSize: 50 },
        temperature: {
            margin: "20px 0 0 0",
            fontSize: 50,
        },
        unit: {
            margin: "20px 20px 0 20px",
            fontSize: 50,
        },
        stats: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 400,
        },
    };

    useEffect(() => {
        const tempConverter = (unit) => ((unit - 32) * 5) / 9;
        if (unit.c) {
            const x = () => tempConverter(data.main.temp);
            const y = () => tempConverter(data.main.feels_like);
            const min = () => tempConverter(data.main.temp_min);
            const max = () => tempConverter(data.main.temp_max);

            setTemperature({ main: x(), second: y(), max: max(), min: min() }); // Celsius
        } else {
            setTemperature({
                main: data.main.temp,
                second: data.main.feels_like,
                max: data.main.temp_max,
                min: data.main.temp_min,
            }); // Fahrenheit
        }
    }, [unit]);

    return (
        <div style={styles.container}>
            <div style={styles.sub}>
                <div style={{ marginTop: 20 }}>
                    <Image
                        src={icon}
                        alt="Picture of the author"
                        width={75}
                        height={75}
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                </div>

                <h2 style={styles.description}>
                    {data.weather[0].description}
                </h2>
                <h3 style={styles.temperature}>
                    {RoundValue(temperature.main, 1)}º
                </h3>
                <div style={styles.unit}>
                    <h4
                        style={{
                            color: unit.f ? "#FFFFFF" : "rgba(0, 0, 16, 0.5)",
                            fontSize: 30,
                        }}
                    >
                        F
                    </h4>
                    <h4
                        style={{
                            color: unit.c ? "#FFFFFF" : "rgba(0, 0, 16, 0.5)",
                            fontSize: 30,
                        }}
                    >
                        C
                    </h4>
                </div>
            </div>
            <div style={styles.stats}>
                <p>Min {RoundValue(temperature.min, 1)}º</p>
                <p>Max {RoundValue(temperature.max, 1)}º</p>
                <p>Feels like {RoundValue(temperature.second, 1)}º</p>
                <p>Wind {RoundValue(data.wind.speed, 1)} m/h</p>
                <p>Humidity {RoundValue(data.main.humidity, 1)}%</p>
            </div>
        </div>
    );
}
