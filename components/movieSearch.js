// system imports
import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
//
const MovieSearch = (props) => {
    const styles = {
        container: {
            backgroundColor: "#3f424d",
            height: 30,
            // width: 300,
            borderRadius: 5,
            margin: "10px 5px",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden", // needed for web
        },
        input: {
            fontSize: 18,
            width: 340,
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
        // next.js =>  e.target.reset() => Resetting input value
        e.target.reset();
        // console.log(ref);
        window.scrollTo({
            top: 650,
            left: 0,
            behavior: "smooth",
        });
        // ref.current.scrollIntoView();
    };
    // console.log("MovieSearch Ref: ", ref);
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
