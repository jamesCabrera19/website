import { useEffect, useState, useCallback, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useUnsplash from "../../hooks/useUnsplash";
import { FaBeer } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const RoundValue = (value, precision) => {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

import WeatherCurrent from "./weatherCurrent";
// import WeatherForecast from "./weatherForecasts";
import WeatherForecast from "./weatherForecast";

const formatTime = (date) => {
    const time = new Date(date);
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    var timeString = time.toLocaleString("en-US", timeOptions);
    return timeString;
};

export default function Weather({ data }) {
    const temp =
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb";
    // data
    const [fetchImg, link, status, errorMessage] = useUnsplash();
    const { city, list } = data;
    // hooks
    const [temperature, setTemperature] = useState({ f: true, c: false });
    const [localLocation, setLocalLocation] = useState({});
    // ref
    const ref = useRef();

    const styles = {
        container: {
            background: "#ff6d6d",
            top: 64,
            left: 0,
            maxHeight: "100vh",
        },
        layerOne: {
            backgroundImage: `url(${
                status === "done" && !errorMessage ? link.links.download : temp
            })`,
            backgroundSize: "cover",
            // border: "1px solid black",
        },
        layerTwo: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            fontSize: 50,

            height: 150,
        },
        layerThree: {},

        disclosure: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: 20,
            color: "#FFFFFF",
            fontWeight: "400",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
    };

    useEffect(() => {
        if (data) {
            fetchImg(data.list[0].weather[0].main);
        } else {
            fetchImg("sunny");
        }
    }, [data]);

    useEffect(() => {
        // error checking needed
        // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
        navigator.geolocation.getCurrentPosition((position) => {
            setLocalLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        });
    }, []); // used to detect user location

    const scroll = (number) => {
        if (ref.current) {
            ref.current.scrollTo(number);
            console.log(ref.current);
        }
    };

    return (
        <>
            <Parallax pages={2} ref={ref} style={styles.container}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={1}
                    style={styles.layerOne}
                />
                <ParallaxLayer
                    offset={0.2}
                    speed={15}
                    factor={1}
                    onClick={() =>
                        setTemperature((prev) => ({ f: !prev.f, c: !prev.c }))
                    }
                    style={{ height: 261 }}
                >
                    <WeatherCurrent data={list[0]} unit={temperature} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.6} speed={30} style={{ height: 200 }}>
                    <WeatherForecast forecast={list} coords={city.coord} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.9} speed={40} style={{ height: 200 }}>
                    <WeatherForecast forecast={list} coords={city.coord} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.9}
                    sticky={{ start: -1, end: 0.5 }}
                    speed={3}
                    style={{ height: 150 }}
                >
                    <div style={styles.layerTwo}>
                        <h1>{city.name}</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    onClick={() => scroll(0)}
                    offset={1}
                    speed={1}
                    sticky={{ start: 1, end: 2 }}
                    style={{ height: 150 }}
                >
                    <div style={styles.disclosure}>
                        <p>Disclosure</p>
                        <p>
                            This app is for public demonstration and potential
                            employers only. Emails and passwords are not shared
                            with anyone and are only visible to the developer.
                            App created by James Cabrera 2022.
                        </p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}
