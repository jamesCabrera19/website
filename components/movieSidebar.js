// system
import React, { useEffect, useContext } from "react";
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
import { Context as MovieContext } from "../context/movieDataContext";

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
            <p id={_styles.text} style={styles.text}>
                {title}
            </p>
        </div>
    );
}
export default function SideBar({ setSearch, theme, fetchGenres }) {
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch();
    const { state } = useContext(MovieContext);

    useEffect(() => {
        setSearch(movies);
    }, [movies]);

    const styles = {
        container: {
            // style mostly controlled by css
            borderRadius: 10,
            fontSize: 10,
            background: theme.navBarColor,
            // border: "1px solid red",
            height: state.moviesByGenre != undefined ? 1953 : 1511,
        },

        title: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            color: theme.fontColor,
        },
        searchBar: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 40,
        },
        disclosure: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px 20px 0px 20px",
            fontSize: 10,
            color: "grey",
            fontWeight: theme.fontWeight,
        },
    };

    const navigator = (Y) => {
        window.scrollTo({
            top: Y,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <div style={styles.container} className={_styles.container}>
            <div style={styles.searchBar}>
                <MovieSearch onTermSubmit={fetchMovie} />
            </div>

            <IconNavigator
                theme={theme}
                title="Movies"
                Icon={AiOutlineHome}
                callback={() => navigator(1000)}
            />
            <IconNavigator
                theme={theme}
                title="My Movies"
                Icon={FiVideo}
                callback={() => navigator(900)}
                // Get "added" movies from context
                // display movies in page
                // navigate user to  navigator(0, 900)}}
            />
            <IconNavigator
                theme={theme}
                title="Settings"
                Icon={FiSettings}
                callback={() => navigator(0)}
                // navigate user to technical page
            />
            <IconNavigator
                theme={theme}
                title="Technical"
                Icon={GiGears}
                callback={() => navigator(0)}

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
