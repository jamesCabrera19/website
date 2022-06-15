import { useCallback, useState, useEffect } from "react";
import useWeatherCurrent from "../../hooks/useWeatherCurrent";
import Image from "next/image";

const formatTime = (date) => {
    const time = new Date(date);

    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    const timeString = time.toLocaleString("en-US", timeOptions);
    const day = time.toDateString();
    return [timeString, day];
};

const filterData = (dataArray) => {
    const icon = [];
    const temp = [];
    const days = [];
    const condition = [];
    const daysObject = {};
    dataArray.forEach((element) => {
        // formatTime(element.dt_txt) // 12:00 PM
        const newHours = formatTime(element.dt_txt)[0]; // hours === 5 day forecast
        const newDays = formatTime(element.dt_txt)[1].slice(0, 3); // days
        if (newHours === "12:00 PM") {
            temp.push(element.main.temp); // temperature
            days.push(newDays); // week days
            condition.push(element.weather[0].main); // climate condition
            icon.push(element.weather[0].icon); // icon
            //
            daysObject = { days, temp, condition, icon };
        }
    });
    return daysObject;
}; // {day:days[],condition:[], temp:[]}

export default function WeatherForecast({ forecast, coords }) {
    // additional weather data that is not provided by main api
    // const [fetchData, data, status, errorMessage] = useWeatherCurrent();
    const [temperature, setTemperature] = useState(0.0);
    const forecastDays = filterData(forecast);
    const tempConverter = (unit) => ((unit - 32) * 5) / 9;
    const RoundValue = (value, precision) => {
        const multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    };

    const styles = {
        container: {
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
    };

    return (
        <div>
            <div style={styles.container}>
                {forecastDays.days.map((day, i) => (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <p key={Math.random() * 999}>{day}</p>
                    </div>
                ))}
            </div>
            <div style={styles.container}>
                {forecastDays.icon.map((condition) => {
                    const icon = `https://openweathermap.org/img/wn/${condition}@2x.png`;
                    return (
                        <div
                            key={Math.random() * 999}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src={icon}
                                alt="Picture of the author"
                                width={75}
                                height={75}
                                blurDataURL="data:..."
                                placeholder="blur"
                            />
                        </div>
                    );
                })}
            </div>
            <div style={styles.container}>
                {forecastDays.temp.map((temp, i) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <p key={Math.random() * 999}>{temp}º</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
