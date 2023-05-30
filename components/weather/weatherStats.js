import { useEffect, useState, useCallback } from "react";

export default function WeatherStats({ city, data, unit, setTemp }) {
    const [temperature, setTemperature] = useState({
        main: 0.0,
        second: 0.0,
        max: 0.0,
        min: 0.0,
    });
    const [sunTime, setSunTime] = useState({
        sunrise: "8:00 PM",
        sunset: "6:00 AM",
    });

    const RoundValue = (value, precision) => {
        const multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };

    useEffect(() => {
        const temperatureConverter = (unit) => ((unit - 32) * 5) / 9;
        const citySunset = new Date(city.sunset * 1000); // unix timestamp
        const citySunrise = new Date(city.sunrise * 1000); // unix timestamp
        const timeOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };

        setSunTime({
            sunrise: citySunrise.toLocaleString("en-US", timeOptions),
            sunset: citySunset.toLocaleString("en-US", timeOptions),
        });
        if (unit.C) {
            // Celsius
            const x = () => temperatureConverter(data.main.temp);
            const y = () => temperatureConverter(data.main.feels_like);
            const min = () => temperatureConverter(data.main.temp_min);
            const max = () => temperatureConverter(data.main.temp_max);
            setTemperature({ main: x(), second: y(), max: max(), min: min() }); // Celsius
            setTemp(x());
        } else {
            // Fahrenheit
            setTemperature({
                main: data.main.temp,
                second: data.main.feels_like,
                max: data.main.temp_max,
                min: data.main.temp_min,
            });
            setTemp(data.main.temp);
        }
    }, [unit, city]);

    const styles = {
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "#FFFFFF",
            height: 150,
            fontSize: 20,
        },
    };

    return (
        <div style={styles.container}>
            <p>Min {RoundValue(temperature.min, 1)}º</p>
            <p>Max {RoundValue(temperature.max, 1)}º</p>
            <p>Feels like {RoundValue(temperature.second, 1)}º</p>
            <p>Wind {RoundValue(data.wind.speed, 1)} m/h</p>
            <p>Humidity {RoundValue(data.main.humidity, 1)}%</p>
            <p>Sunset {sunTime.sunset}</p>
            <p>Sunrise {sunTime.sunrise}</p>
        </div>
    );
}
