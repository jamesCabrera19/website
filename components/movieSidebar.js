// system
import React, { useEffect } from "react";
// icons
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings, FiVideo } from "react-icons/fi";
import { GiGears } from "react-icons/gi";
// components
import MovieSearch from "./movieSearch";
// CSS styles
import _styles from "../styles/movieApp.module.css";
// hooks
import useSearch from "../hooks/useSearch";

//
const screenNavigator = (Y) =>
    window.scrollTo({
        top: Y,
        left: 0,
        behavior: "smooth",
    });
//
//
//
export default function SideBar({ setSearch, theme, setModal }) {
    const [fetchMovies, movies, errorMessage] = useSearch();

    useEffect(() => {
        setSearch(movies);
    }, [movies]);

    const styles = {
        container: {
            // style mostly controlled by css
            borderRadius: 10,
            fontSize: 10,
            background: theme.navBarColor,
            position: "fixed",
            //border: "1px solid red",
        },
        disclosure: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px 20px 0px 20px",
            fontSize: 10,
            color: "grey",
            fontWeight: theme.fontWeight,
        },
        iconWrapper: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "90px",
            fontWeight: theme.fontWeight,
            // border: "1px solid red",
        },
        text: {
            color: theme.navBarFontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
        },
    };

    return (
        <div style={styles.container} className={_styles.container}>
            <MovieSearch
                theme={theme}
                onTermSubmit={fetchMovies}
                setModal={setModal}
                callback={() => screenNavigator(1200)} // approximate location
            />

            <div
                style={styles.iconWrapper}
                className={_styles.icon}
                onClick={() => screenNavigator(1500)} // approximate location
            >
                <AiOutlineHome size={30} color={theme.iconColor} />
                <p style={styles.text}>Movies</p>
            </div>
            <div
                style={styles.iconWrapper}
                className={_styles.icon}
                onClick={() => {
                    // maybe set a toggle btn to either keep
                    //<myMovies/> open or keep it close
                    // display movies in page
                    // navigate user to  navigator(0, 900)}}
                    screenNavigator(1220);
                    setModal((prev) => ({
                        ...prev,
                        myMovies: !prev.myMovies,
                    }));
                }} // approximate location
            >
                <FiVideo size={30} color={theme.iconColor} />
                <p style={styles.text}>My Movies</p>
            </div>
            <div
                style={styles.iconWrapper}
                className={_styles.icon}
                onClick={() =>
                    setModal((prev) => ({
                        ...prev,
                        settingsModal: !prev.settingsModal,
                    }))
                } // approximate location
            >
                <FiSettings size={30} color={theme.iconColor} />
                <p style={styles.text}>Settings</p>
            </div>
            <div
                style={styles.iconWrapper}
                className={_styles.icon}
                onClick={() => screenNavigator(0)} // approximate location
                // navigate user to technical page
            >
                <GiGears size={30} color={theme.iconColor} />
                <p style={styles.text}>Technical</p>
            </div>

            <div style={styles.disclosure}>
                <p>Disclosure</p>
                <p>
                    This app is for public demonstration and potential employers
                    only. Emails and passwords are not shared with anyone and
                    are only visible to the developer. App created by James
                    Cabrera 2022.
                </p>
            </div>
        </div>
    );
}
