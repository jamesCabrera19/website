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
import useFetch from "../hooks/useFetch";

//
const screenNavigator = (Y) =>
    window.scrollTo({
        top: Y,
        left: 0,
        behavior: "smooth",
    });
//
function IconNavigator({ title, Icon, callback, theme }) {
    const styles = {
        iconWrapper: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "90px",
            fontWeight: theme.fontWeight,
            // border: "1px solid yellow",
        },
        text: {
            color: theme.navBarFontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
        },
    };

    return (
        <div
            style={styles.iconWrapper}
            className={_styles.icon}
            onClick={() => callback()}
        >
            <Icon size={30} color="rgb(230, 89, 137)" />
            <p style={styles.text}>{title}</p>
        </div>
    );
}
//

//
//
export default function SideBar({ setSearch, theme, setModal }) {
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch();

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
        title: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            color: theme.fontColor,
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
    };

    return (
        <div style={styles.container} className={_styles.container}>
            <MovieSearch
                theme={theme}
                onTermSubmit={fetchMovie}
                setModal={setModal}
                callback={() => screenNavigator(1200)} // approximate location
            />

            <IconNavigator
                theme={theme}
                title="Movies"
                Icon={AiOutlineHome}
                callback={() => screenNavigator(1500)} // approximate location
            />
            <IconNavigator
                theme={theme}
                title="My Movies"
                Icon={FiVideo}
                callback={() => {
                    // maybe set a toggle btn to either keep
                    //<myMovies/> open or keep it close
                    screenNavigator(1220);
                    setModal((prev) => ({
                        ...prev,
                        myMovies: !prev.myMovies,
                    }));
                }} // approximate location
                // display movies in page
                // navigate user to  navigator(0, 900)}}
            />
            <IconNavigator
                theme={theme}
                title="Settings"
                Icon={FiSettings}
                callback={() =>
                    setModal((prev) => ({
                        ...prev,
                        settingsModal: !prev.settingsModal,
                    }))
                }

                // navigate user to technical page
            />
            <IconNavigator
                theme={theme}
                title="Technical"
                Icon={GiGears}
                callback={() => screenNavigator(0)}

                // navigate user to technical page
            />

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
