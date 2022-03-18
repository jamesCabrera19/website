// system imports
import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
//
const MovieSearch = (props) => {
    const styles = {
        container: {
            backgroundColor: props.theme.inputColor, // default "rgb(63, 66, 77)",
            height: 30,
            borderRadius: 5,
            margin: "70px 5px 0 5px",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden", // needed for web
            border: "0px solid red",
        },
        input: {
            fontSize: 18,
            width: 340,
            // backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: 0,
        },
        icon: {
            fontSize: 30,
            alignSelf: "center",
            margin: "0 15px",
            color: "white",
        },
    };

    // NextJS doesn't require a hook to store the Input Value
    const onEnd = (e) => {
        e.preventDefault();
        // next.js => e.target.name.value => Getting value from input
        props.onTermSubmit(e.target.name.value);
        // next.js =>  e.target.reset() => Resetting input values
        e.target.reset();
        // navigates user to search movies
        props.callback();
    };

    return (
        <>
            <form onSubmit={onEnd} style={styles.container}>
                <AiOutlineSearch name="search" style={styles.icon} />
                <input
                    style={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                />
            </form>
        </>
    );
};
export default MovieSearch;
