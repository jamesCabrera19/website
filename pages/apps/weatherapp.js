import { useEffect, useState, useCallback, useRef } from "react";
import useWeather from "../../hooks/useWeather";
import useUnsplash from "../../hooks/useUnsplash";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import WeatherCurrent from "../../components/weather/weatherCurrent";
import WeatherForecast from "../../components/weather/weatherForecast";
// import WeatherForecast from "../../components/weather/weatherForecasts";

import WeatherLoader from "../../components/weather/weatherLoader";
import useTest from "../../hooks/useTest";

import { FaBeer } from "react-icons/fa";
import Weather from "../../components/weather/weather";

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

// function App({ data }) {
//     const [fetchImg, link, status, errorMessage] = useUnsplash();
//     const { links, description, user } = link; // unsplash photo data
//     const [location, setLocation] = useState({});

//     const { city, list } = data;

//     const ref = useRef();
//     const temp =
//         "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb";
//     // const [term, setTerm] = useState("");

//     const styles = {
//         container: {
//             background: "#ff6d6d",
//             top: 64,
//             left: 0,
//             maxHeight: "100vh",
//         },
//         layerOne: {
//             backgroundImage: `url(${temp})`,
//             backgroundSize: "cover",
//             // border: "1px solid black",
//         },
//         layerTwo: {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             color: "#FFFFFF",
//             fontSize: 50,
//         },
//         layerThree: {},

//         disclosure: {
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             fontSize: 20,
//             color: "#FFFFFF",
//             fontWeight: "400",
//             backgroundColor: "rgba(0, 0, 0, 0.3)",
//         },
//     };

//     useEffect(() => {
//         if (data) {
//             fetchImg(data.list[0].weather[0].main);
//         } else {
//             fetchImg("sunny");
//         }
//     }, [data]);

//     useEffect(() => {
//         // error checking needed
//         // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
//         navigator.geolocation.getCurrentPosition((position) => {
//             setLocation({
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//             });
//         });
//     }, []);

//     return (
//         <>
//             <Parallax pages={2} ref={ref} style={styles.container}>
//                 <ParallaxLayer
//                     offset={0}
//                     speed={0.5}
//                     factor={1}
//                     style={styles.layerOne}
//                 />
//                 <ParallaxLayer offset={0.2} speed={15} factor={1}>
//                     <WeatherCurrent condition="Humid" temp={90} />
//                     {/* list[0] */}
//                 </ParallaxLayer>

//                 <ParallaxLayer offset={0.6} speed={30}>
//                     <WeatherForecast />
//                 </ParallaxLayer>

//                 <ParallaxLayer
//                     offset={0.9}
//                     sticky={{ start: -1, end: 2.5 }}
//                     speed={3}
//                 >
//                     <div style={styles.layerTwo}>
//                         <h1>{city.name}</h1>
//                     </div>
//                 </ParallaxLayer>
//                 <ParallaxLayer
//                     offset={1}
//                     speed={1}
//                     sticky={{ start: 1, end: 2 }}
//                 >
//                     <div style={styles.disclosure}>
//                         <p>Disclosure</p>
//                         <p>
//                             This app is for public demonstration and potential
//                             employers only. Emails and passwords are not shared
//                             with anyone and are only visible to the developer.
//                             App created by James Cabrera 2022.
//                         </p>
//                     </div>
//                 </ParallaxLayer>
//             </Parallax>
//         </>
//     );
// }

export default function WeatherApp() {
    const [fetchData, data, status, errorMessage] = useWeather();
    useEffect(() => {
        fetchData("houston");
    }, []);

    return (
        <>
            {status === "done" ? (
                <Weather
                    fetchData={fetchData}
                    data={data}
                    status={status}
                    errorMessage={errorMessage}
                />
            ) : (
                <WeatherLoader color="red" />
            )}
        </>
    );
}
