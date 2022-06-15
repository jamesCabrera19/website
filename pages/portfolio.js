import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//
import { Context as ColorContext } from "../context/colorScheme";
//
import ButtonContainer from "../components/buttons";
//
import _styles from "../styles/buttons.module.css";

const cards = [
    {
        title: "Movies",
        frameworks: [
            // features
            "User Authentication",
            "React useContext API",
            "Cloud Save",
        ],
        img: require("../imgs/netflix.jpg"),
        link: "/apps/movieapp",
    },
    {
        title: "Music",
        frameworks: [
            "Custom Express API",
            "React useContext API",
            // "Cloud Sync",
        ],
        img: require("../imgs/ticktock.jpg"),
        link: "/apps/musicapp",
    },
    {
        title: "Weather",
        frameworks: ["Redux API"],
        img: require("../imgs/solar.jpg"),
        link: "/apps/weatherapp",
    },
];

export default function Portfolio() {
    const { state, footerOptions } = useContext(ColorContext);

    useEffect(() => {
        footerOptions(state.backgroundColor);
        return () => {
            footerOptions(null); // screen is unfocused
        };
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between", // horizontal position in container
            padding: 0,
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            backgroundColor: state.backgroundColor,
        },
        sectionOne: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Y direction in container
            marginTop: 60,
            padding: "80px 0 30px 0",
            backgroundColor: state.sectionColor,
            width: "100%",
            // border: "1px solid yellow",
        },
        cardContainer: {
            display: "flex",
            backgroundColor: state.sectionColor,
            // border: "1px solid red",
            justifyContent: "center",
            overflow: "hidden",
        },
        card: {
            height: 520,
            width: 280,
            border: "1px solid #8e8e8e1c",
            margin: "20px 20px 120px 20px",
        },
        imgWrapper: {
            width: 280,
            height: 280,
            borderBottom: "1px solid #8E8E8E",
            margin: "auto",
            position: "relative",
        },
        header: {
            // h1, h2, h3
            color: state.headingColor,
            fontWeight: state.fontWeight,
        },
        title: {
            textAlign: "center",
            fontWeight: 200,
            color: state.fontColor,
            textTransform: "uppercase",
        },
        features: {
            fontStyle: "italic",
            textAlign: "center",
            fontWeight: state.fontWeight,
            color: state.fontColor,
        },
        text: {
            // <p/>
            fontWeight: 200, //state.fontWeight,
            color: state.fontColor,
        },
        blankLine: {
            width: 80,
            height: 1,
            borderBottom: "1px solid #8E8E8E",
            margin: "auto",
        },
        btnContainer: {
            // button link section
            height: 200,
            display: "flex",
            flexWrap: "wrap", // wrap is needed when screen becomes too small
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: state.sectionColor,
        },
        disclaimer: {
            container: {
                display: "flex",
                backgroundColor: state.backgroundColor,
                height: 250,
                justifyContent: "center",
                alignItems: "center",
                // border: "1px solid red",
            },
            textWrap: {
                width: "80%",
                overflowWrap: "break-word",
                // border: "1px solid red",
            },
            text: {
                fontSize: 20,
                fontWeight: 200,
                color: state.fontColor,
                lineHeight: 1.4,
            },
        },
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.sectionOne}>
                    <h1 style={styles.header}>Applications</h1>
                    <hr style={{ width: 100, border: "1px solid #8E8E8E" }} />
                </div>
                {/*  */}
                <div
                    className={_styles.cardContainer}
                    style={styles.cardContainer}
                >
                    {cards.map((item) => {
                        return (
                            <Link href={item.link} key={Math.random() * 99}>
                                <div
                                    className={_styles.card}
                                    style={styles.card}
                                >
                                    <div style={styles.imgWrapper}>
                                        <Image
                                            src={item.img.default.src}
                                            layout="fill"
                                            alt="Movie App"
                                        />
                                    </div>
                                    <h2 style={styles.title}>{item.title}</h2>
                                    <div style={styles.blankLine}>
                                        {/* This is a ---- line */}
                                    </div>
                                    <h3 style={styles.features}>Features</h3>
                                    <p
                                        style={Object.assign(styles.text, {
                                            textAlign: "center",
                                        })}
                                    >
                                        {item.frameworks[0]}
                                    </p>
                                    <p
                                        style={Object.assign(styles.text, {
                                            textAlign: "center",
                                        })}
                                    >
                                        {item.frameworks[1]}
                                    </p>
                                    <p
                                        style={Object.assign(styles.text, {
                                            textAlign: "center",
                                        })}
                                    >
                                        {item.frameworks[2]}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div style={styles.disclaimer.container}>
                    <div style={styles.disclaimer.textWrap}>
                        <p style={styles.disclaimer.text}>
                            All the applications listed above were developed
                            solely by me (James Cabrera) in approximately a 1.5
                            year period. App designed was inspired by similar
                            apps such as Netflix, Apple Music and CodePen
                            ("codepen.io"). You can see the code for any of my
                            applications by visiting my github -
                            https://github.com/PlayaLimbo.
                        </p>
                    </div>
                </div>
                <div style={styles.btnContainer}>
                    <ButtonContainer borderColor={state.buttonColor} />
                </div>
            </div>
        </>
    );
}
