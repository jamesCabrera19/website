import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
import leftArrow from "../imgs/left-arrow.svg";
import rightArrow from "../imgs/right-arrow.svg";

const data = [
    {
        id: Math.random() * 9999,
        title: "Video streaming application build for web and mobile devices.",
        subTitle:
            "React useContext api, user authentication, functional-oriented programing and CRUD operations",
    },
    {
        id: Math.random() * 9999,
        title: "Music streaming application build using a custom REST API",
        subTitle:
            "React Redux api, class-oriented programing and CRUD operations",
    },
    {
        id: Math.random() * 9999,
        title: "A distinguished marine character",
        subTitle: "Apps",
    },
];

export default function Slider({ backgroundColor, fontColor, headerStyles }) {
    // state === 1 || 2 || 3
    const [state, setState] = useState(1);

    // handles the right btn actions
    const handleRight = () => {
        if (state !== data.length) {
            setState(state + 1); // increasing position
        } else if (state === data.length) {
            setState(1); // reset slider to default position
        }
    };
    // handles the left btn actions
    const handleLeft = () => {
        if (state !== 1) {
            setState(state - 1); // decreasing position
        } else if (state === 1) {
            setState(data.length); // reset slider to default position
        }
    };

    const moveDot = (index) => setState(index);

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
            border: "0px solid rgba(34, 34, 34, 0.187)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            top: "50%",
            right: 0,
            transform: "translateY(-60%)",
            background: "#FFFFFF",
        },
        buttonLeft: {
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "0px solid rgba(34, 34, 34, 0.187)",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            top: "50%",
            left: 0,
            transform: "translateY(-60%)",
            background: "transparent",
        },
    };

    return (
        <>
            <div style={styles.sliderContainer}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor,
                    }}
                >
                    <div
                        style={{
                            // width: "100%",
                            height: "100%",
                            margin: "100px 0 0 50px",
                            justifyContent: "flex-start",
                            // border: "1px solid red",
                        }}
                    >
                        <h3 style={headerStyles}>Features</h3>
                        <h2 style={headerStyles}>{data[state - 1].title}</h2>
                        <p style={{ color: fontColor }}>
                            {data[state - 1].subTitle}
                        </p>
                        {/* <p style={{ color: fontColor }}>
                            {data[state - 1].subTitle}
                        </p> */}
                    </div>
                    <img
                        src={require(`../imgs/app${state}.png`).default.src}
                        style={styles.slideImg}
                    />
                </div>

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
                            key={Math.random() * 99}
                            onClick={() => moveDot(index + 1)} // index cant be zero
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
