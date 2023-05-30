import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useUnsplash from "../../hooks/useUnsplash";

import WeatherCurrent from "./weatherCurrent";
import WeatherStats from "./weatherStats";
import WeatherForecast from "./weatherForecast";

export default function Weather({ data, fetchData }) {
    const temp =
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb";
    // data
    const [fetchImg, link, status, errorMessage] = useUnsplash();
    const { city, list } = data;
    // hooks
    const [currentTemp, setCurrentTemp] = useState(0.0);
    const [temperature, setTemperature] = useState({
        F: true,
        C: false,
    });

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
        form: {
            backgroundColor: "#FFFFFF", // default "rgb(63, 66, 77)",
            height: 30,
            borderRadius: 5,
            margin: "70px 5px 0 5px",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden", // needed for web
            // border: "0px solid red",
        },
        input: {
            backgroundColor: "transparent",
            fontSize: 30,
            width: 340,
            outline: "none",
            border: 0,
        },
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
        const description = data.list[0].weather[0].description;
        data ? fetchImg(description) : fetchImg("sunny");
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
        }
    };
    const onEnd = (e) => {
        e.preventDefault();
        const value = e.target.name.value;
        fetchData(value);
    };

    return (
        <>
            <Parallax pages={2} ref={ref} style={styles.container}>
                <ParallaxLayer
                    offset={0}
                    speed={5}
                    factor={1}
                    style={styles.layerOne}
                />
                <ParallaxLayer
                    offset={0.35}
                    speed={25}
                    factor={1}
                    style={{ height: 200 }}
                    onClick={() =>
                        setTemperature((prev) => ({
                            F: !prev.F,
                            C: !prev.C,
                        }))
                    }
                >
                    <WeatherCurrent
                        data={list[0]}
                        unit={temperature}
                        temp={currentTemp}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.6} speed={30} style={{ height: 200 }}>
                    <WeatherStats
                        city={city}
                        data={list[0]}
                        unit={temperature}
                        setTemp={setCurrentTemp}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={0.82} speed={35} style={{ height: 200 }}>
                    <WeatherForecast forecast={list} unit={temperature} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.1}
                    sticky={{ start: 0.2, end: 0.5 }}
                    speed={10}
                    style={{ height: 150 }}
                >
                    <div style={styles.layerTwo}>
                        <h1>{city.name}</h1>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={50} style={{ height: 150 }}>
                    <div style={styles.layerTwo}>
                        <form style={styles.form} onSubmit={onEnd}>
                            <input
                                style={styles.input}
                                id="name"
                                name="name"
                                type="text"
                            />
                        </form>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    onClick={() => scroll(0)}
                    offset={1}
                    speed={10}
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
