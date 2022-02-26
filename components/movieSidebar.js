import { useEffect, useContext, useState } from "react";

import MovieSearch from "./movieSearch";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings, FiVideo } from "react-icons/fi";
import _styles from "../styles/movieApp.module.css";
import useFetch from "../hooks/useFetch";

export default function SideBar({ setSearch }) {
    const [fetchMovie, movies, errorMessage, setErrorMessage] = useFetch();
    // todo
    // 1. home buttom should show d

    useEffect(() => {
        setSearch(movies);
    }, [movies]);

    const styles = {
        container: {
            // style mostly controlled by css
            borderRadius: 10,
            background: "rgba(17, 17, 27, 0.6)",
            fontSize: 10,
            // maxHeight: 1500,
        },
        iconWrapper: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            // border: "1px solid yellow",
            marginTop: "90px",
            fontWeight: "300",
        },
        title: {
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
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
            fontSize: 10,
            fontWeight: "300",
            margin: "30px 20px 0px 20px",
            color: "grey",
        },
    };
    return (
        <div style={styles.container} className={_styles.container}>
            <div style={styles.searchBar}>
                <MovieSearch onTermSubmit={fetchMovie} />
            </div>

            <div style={styles.iconWrapper} className={_styles.icon}>
                <AiOutlineHome size={30} />
                <p id={_styles.text}>Movies</p>
            </div>
            <div style={styles.iconWrapper} className={_styles.icon}>
                <FiVideo size={30} />
                <p id={_styles.text}>My Movies</p>
            </div>

            <div style={styles.iconWrapper} className={_styles.icon}>
                <FiSettings size={30} />
                <p className={_styles.text}>Settings</p>
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
