// system imports
import React, { useRef, useContext } from "react";
import Image from "next/image";
// context
import { Context as MovieContext } from "../../context/movieDataContext";
// icons
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
// css
import _styles from "../../styles/movieApp.module.css";
//
function MovieGenres(props) {
    const { fetchMoviesByGenre } = useContext(MovieContext);
    const scroller = useRef();
    const slider = (amount) => (scroller.current.scrollLeft += amount);

    const styles = {
        container: {
            display: "flex",
            justifyContent: "flex-end",
        },
        cardContainer: {
            // border: "1px solid red",
            display: "flex",
            flexDirection: "row",
            margin: "70px 0",
            overflow: "hidden",
            backgroundColor: props.theme.backgroundColor, // dark // used if image fails to load
        },
        card: {
            margin: "0 10px 0 10px",
            minWidth: "150px",
            maxWidth: "150px",
            height: 150,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
            // border: "1px solid red",
        },
        title: {
            position: "absolute",
            zIndex: 1,
            left: 115,
            color: props.theme.fontColor,
            fontWeight: props.theme.fontWeight,
        },
        image: {
            width: "100%",
        },
        btnLeft: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "0px -40px 0 0",
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
        btnRight: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: "0px 0px 0 -40px",
            zIndex: 1,
            cursor: "pointer",
            // border: "1px solid blue",
        },
    };

    return (
        <>
            <h3 style={styles.title}>{props.title}</h3>
            <div style={styles.container}>
                <div style={styles.btnLeft}>
                    <AiOutlineLeftCircle
                        className={_styles.scroller}
                        // color="#FFFFFF"
                        size={50}
                        onClick={() => slider(-100)}
                    />
                </div>
                <div style={styles.cardContainer} ref={scroller}>
                    {props.state.map((item, i) => {
                        // looping over genres to solve name discrepancies
                        let _image = item.name.toLowerCase();
                        if (_image === "science fiction") {
                            _image = "sci-fi";
                        } else if (_image === "tv movie") {
                            _image = "tvmovie";
                        }
                        return (
                            <div
                                key={Math.random() * 9999}
                                style={styles.card}
                                onClick={() => {
                                    fetchMoviesByGenre(item.id);
                                    // fetched Movies will come into focus
                                    window.scrollTo({
                                        top: 1900,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <Image
                                    src={
                                        require(`../../imgs/movieApp/${_image}.jpg`)
                                            .default.src
                                    }
                                    alt={_image}
                                    layout="fill"
                                    priority
                                />
                            </div>
                        );
                    })}
                </div>
                <div style={styles.btnRight}>
                    <AiOutlineRightCircle
                        className={_styles.scroller}
                        size={50}
                        onClick={() => slider(100)}
                    />
                </div>
            </div>
        </>
    );
}
export default React.memo(MovieGenres);
