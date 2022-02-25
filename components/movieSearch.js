// system imports

import { AiOutlineSearch } from "react-icons/ai";

//
export default function MovieSearch(props) {
    const styles = {
        background: {
            backgroundColor: "#3f424d",
            height: 30,
            width: 300,
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
            fontSize: 18,
            alignSelf: "center",
            margin: "0 15px",
            color: "white",
        },
    };
    return (
        <div style={styles.background}>
            <AiOutlineSearch name="search" style={styles.icon} />
            <input
                placeholder="search movies"
                autoCorrect={false}
                value={props.movieTerm}
                style={styles.input}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
            />
        </div>
    );
}
