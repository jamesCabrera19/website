import { useContext, useState, useCallback, useEffect } from "react";
import Link from "next/link";
// import { Context as ColorContext } from "../../context/colorScheme";
import _styles_ from "../../styles/Toast.module.css";

export default function MusicApp() {
    // const { state } = useContext(ColorContext);
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            margin: "80px auto",
            border: "1px solid red",
        },
        sideBar: {
            width: 250,
            border: "1px solid blue",
            height: 800,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
        },
        header: {
            color: "grey",
        },
    };
    return (
        <div style={styles.container}>
            {/* <h1>music app</h1> */}
            <Link href={"/apps/musicapp/music"}>music nested link</Link>
            <div style={styles.sideBar}>
                <h5 style={styles.header}>Music</h5>
                <h5 style={styles.header}>Library</h5>
                <h5 style={styles.header}>Playlist</h5>
            </div>
        </div>
    );
}
