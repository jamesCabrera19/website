import { useEffect, useState, useCallback } from "react";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

export default function WeatherCurrent({ data, unit, temp }) {
    // data === first item of the forecast array(40)
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    //
    const RoundValue = (value, precision) => {
        const multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };
    //
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "#FFFFFF",
            height: 180,
        },
        description: {
            margin: "20px 20px 0 20px",
            fontSize: 50,
        },
        temperature: {
            margin: "20px 0 0 0",
            fontSize: 50,
        },
        unit: {
            margin: "20px 0 0 20px",
            fontSize: 50,
        },
    };

    return (
        <div style={styles.container}>
            <div style={{ marginTop: 30 }}>
                <Image
                    src={icon}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    blurDataURL="data:..."
                    placeholder="blur"
                />
            </div>

            <h2 style={styles.description}>
                {data.weather[0].description.toUpperCase()}
            </h2>
            <h3 style={styles.temperature}>{RoundValue(temp, 1)}º</h3>
            <div style={styles.unit}>
                <h4
                    style={{
                        color: unit.F ? "#FFFFFF" : "rgba(0, 0, 16, 0.5)",
                        fontSize: 30,
                    }}
                >
                    F
                </h4>
                <h4
                    style={{
                        color: unit.C ? "#FFFFFF" : "rgba(0, 0, 16, 0.5)",
                        fontSize: 30,
                    }}
                >
                    C
                </h4>
            </div>
        </div>
    );
}
