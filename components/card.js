import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import leftArrow from "../imgs/left-arrow.svg";
import rightArrow from "../imgs/right-arrow.svg";

export default function Slider({ backgroundColor, fontColor }) {
    const [state, setState] = useState(1);
    const data = [
        {
            id: Math.random() * 9999,
            title: "Lorem ipsum",
            subTitle: "Lorem",
        },
        {
            id: Math.random() * 9999,
            title: "Lorem ipsum",
            subTitle: "Lorem",
        },
        {
            id: Math.random() * 9999,
            title: "Lorem ipsum",
            subTitle: "Lorem",
        },
    ];

    const handleRight = () => {
        if (state !== data.length) {
            setState(state + 1); // increasing position
        } else if (state === data.length) {
            setState(1); // reset slider to default position
        }
    };
    const handleLeft = () => {
        if (state !== 1) {
            setState(state - 1);
        } else if (state === 1) {
            setState(data.length); // reset slider to default position
        }
    };
    const moveDot = (index) => setState(index);

    // console.log(require(`../imgs/app1.png`).default.src);
    const styles = {
        active: {
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 1,
            transition: "opacity ease-in-out 0.5s",
            display: "flex",
        },
        inactive: {
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 0,
            transition: "opacity ease-in-out 0.5s",
        },
        slideImg: {
            width: "50%",
            height: "50%",
            objectFit: "cover",
        },
        sliderContainer: {
            maxWidth: 700,
            height: 425,
            margin: "100px auto",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            // border: "1px solid red",
        },
        containerDots: {
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: " translateX(-50%)",
            display: "flex",
        },
        dotActive: {
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "3px solid #f1f1f1",
            margin: "0 5px",
            background: "rgb(32, 32, 32)",
        },
        dotInactive: {
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "3px solid #f1f1f1",
            margin: "0 5px",
            background: "#f1f1f1",
        },
        buttonRight: {
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "transparent",
            border: "0px solid rgba(34, 34, 34, 0.187)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            top: "50%",
            right: 0,
            transform: "translateY(-60%)",
        },
        buttonLeft: {
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "transparent",
            border: "0px solid rgba(34, 34, 34, 0.187)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            top: "50%",
            left: 0,
            transform: "translateY(-60%)",
        },
    };
    // console.log(leftArrow);
    return (
        <>
            <div style={styles.sliderContainer}>
                {data.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={
                                state === index + 1
                                    ? styles.active
                                    : styles.inactive
                            }
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: backgroundColor,
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        margin: "140px 0 0 50px",
                                        color: fontColor,

                                        justifyContent: "flex-start",
                                        border: "1px solid red",
                                    }}
                                >
                                    <h3>Features</h3>
                                    <h2>A distinguished marine character</h2>
                                    <p>{obj.title}</p>
                                    <p>{obj.title}</p>
                                </div>
                                <img
                                    src={
                                        require(`../imgs/app${state}.png`)
                                            .default.src
                                    }
                                    style={styles.slideImg}
                                />
                            </div>
                        </div>
                    );
                })}
                <button
                    onClick={() => handleRight()}
                    style={styles.buttonRight}
                >
                    <img src={rightArrow.src} />
                </button>
                <button onClick={() => handleLeft()} style={styles.buttonLeft}>
                    <img src={leftArrow.src} />
                </button>
                <div style={styles.containerDots}>
                    {data.map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            style={
                                state === index + 1
                                    ? styles.dotActive
                                    : styles.dotInactive
                            }
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
}
