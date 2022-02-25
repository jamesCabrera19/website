import { useEffect, useContext, useState } from "react";

import MovieSearch from "./movieSearch";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings, FiVideo } from "react-icons/fi";
import _styles from "../styles/movieApp.module.css";

export default function SideBar() {
    const [state, setState] = useState(false);

    // const onChange = () => {
    //     if (window.scrollY >= 64) {
    //         setState(true);
    //     } else {
    //         setState(false);
    //     }
    // };
    // window.addEventListener("scroll", onChange);
    // console.log(state);
    const styles = {
        container: {
            width: 320,
            // border: "1px solid red",
            // zIndex: state ? 1 : -1,
            zIndex: 1,
            position: "absolute",
            left: 0,
            bottom: 0,
            borderRadius: 10,
            background: "rgba(17, 17, 27,0.5)",
        },
        iconWrapper: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            // border: "1px solid yellow",
            marginTop: "90px",
            // color: "rgba(255, 255, 255, 0.6)",
            fontWeight: "300",
        },
        title: {
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
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
            color: "grey",
            fontSize: 14,
            fontWeight: "300",
            margin: "30px 20px 0px 20px",
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                <h2>James Cabrera</h2>
            </div>
            <div style={styles.searchBar}>
                <MovieSearch />
            </div>

            <div style={styles.iconWrapper} className={_styles.icon}>
                <AiOutlineHome size={30} />
                <p>Movies</p>
            </div>
            <div style={styles.iconWrapper} className={_styles.icon}>
                <FiVideo size={30} />
                <p>My Movies</p>
            </div>

            <div style={styles.iconWrapper} className={_styles.icon}>
                <FiSettings size={30} />
                <p>Settings</p>
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
