// system
import { useEffect } from "react";
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

export default function SideBar({ setSearch, theme, fetchGenres }) {
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
            // border: "1px solid red",
        },
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
        text: {
            color: theme.navBarFontColor,
            fontWeight: theme.fontWeight, // font weight
            fontFamily: theme.fontFamily,
        },
    };
    return (
        <div style={styles.container} className={_styles.container}>
            <div style={styles.searchBar}>
                <MovieSearch onTermSubmit={fetchMovie} />
            </div>

            <div style={styles.iconWrapper} className={_styles.icon}>
                <AiOutlineHome size={30} color="rgb(230, 89, 137)" />
                <p id={_styles.text} style={styles.text}>
                    Movies
                </p>
            </div>
            <div style={styles.iconWrapper} className={_styles.icon}>
                <FiVideo size={30} color="rgb(230, 89, 137)" />
                <p id={_styles.text} style={styles.text}>
                    My Movies
                </p>
            </div>

            <div
                style={styles.iconWrapper}
                className={_styles.icon}
                onClick={() => fetchGenres()}
            >
                <FiSettings size={30} color="rgb(230, 89, 137)" />
                <p className={_styles.text} style={styles.text}>
                    Settings
                </p>
            </div>
            <div style={styles.iconWrapper} className={_styles.icon}>
                <GiGears size={30} color="rgb(230, 89, 137)" />
                <p className={_styles.text} style={styles.text}>
                    Technical
                </p>
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
