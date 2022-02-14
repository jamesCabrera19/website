import Image from "next/image";
// import profilePic from "../public/me.jpeg";
// import AppImage from "../public/app.png";
import Link from "next/link";
import React from "react";
import Slider from "../components/card";

function Buttons() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: 700,
            // backgroundColor: "#080724",
            // marginTop: -10,
            height: 100,
            alignItems: "center",
        },
        button: {
            // margin: "10px 50px",
            padding: 15,
            height: 50,
            borderRadius: 0,
            backgroundColor: "transparent", // should be page background color
            border: "3px solid rgb(26, 26, 26)",
            textAlign: "center",
            // textDecoration: "none",
            // display: "inline-block",
            color: "#8E8E8E",
        },
    };
    return (
        <div style={styles.container}>
            <Link href="/contact">
                <button style={styles.button}>Contact</button>
            </Link>
            <Link href="/portfolio">
                <button style={styles.button}>Portfolio</button>
            </Link>
            <Link href="/resume">
                <button style={styles.button}>Resume</button>
            </Link>
            <Link href="https://www.linkedin.com/">
                <button style={styles.button}>LinkedIn</button>
            </Link>
            <Link href="https://github.com/">
                <button style={styles.button}>Github</button>
            </Link>
        </div>
    );
}

export default function HomePage() {
    // i modified the background color of the main doc
    // as backgroundColorDark. Located at styles/global.css
    const day = "night";

    const Colors = {
        backgroundColorLight: "#FFFFFF",
        backgroundColorDark: "rgb(34, 33, 33)",
        headingColor: "#505050",
        buttonColor: "#505050",
        fontColor: "#8E8E8E",
        sectionColor: "#F5F5F5",
        sectionColorDark: "rgb(26, 26, 26)",
    };
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between", // horizontal position in container
            // textAlign: "center", // vertical position in container
            backgroundColor:
                day === "night"
                    ? Colors.sectionColorDark
                    : Colors.backgroundColorLight,
            padding: 0,
            margin: "20px 0",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        intro: {
            height: 450,
            padding: 20,
            display: "flex",
            alignItems: "center",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.intro}>
                <div style={{ margin: "0 50px" }}>
                    <h1 style={{ color: Colors.headingColor, fontWeight: 400 }}>
                        Jaime Cabrera
                    </h1>
                    <hr
                        style={{
                            width: 40,
                            float: "left",
                            border: "1px solid #8E8E8E",
                        }}
                    />
                    <br />
                    <p style={{ color: Colors.fontColor, fontWeight: 400 }}>
                        Hello, I am a Javascript developer specialized in
                        frontend and backend development for web and iOS
                        applications.
                    </p>
                    <p style={{ color: Colors.fontColor, fontWeight: 400 }}>
                        I have over one year of experience building scalable web
                        apps using Mongo DB, Express, React-React Native and
                        NodeJS.
                    </p>
                    <br />
                    <br />
                    <button
                        style={{
                            height: 50,
                            borderRadius: 0,
                            backgroundColor: Colors.buttonColor,
                            border: "0px solid #C0D4FF",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            color: "#FFFFFF",
                            padding: 15,
                            marginRight: 30,
                        }}
                    >
                        Contact Me
                    </button>
                    <button
                        style={{
                            height: 50,
                            borderRadius: 0,
                            backgroundColor: Colors.buttonColor,
                            border: "0px solid #C0D4FF",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            color: "#FFFFFF",
                            padding: 15,
                        }}
                    >
                        View Work
                    </button>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: Colors.backgroundColorDark,
                    height: 800,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "#FFFFFF",
                }}
            >
                <h1 style={{ marginTop: 100, fontWeight: 400 }}>
                    Current Projects
                </h1>
                <hr style={{ width: 100, border: "1px solid #8E8E8E" }} />

                <Slider backgroundColor="#FFFFFF" fontColor="#8E8E8E" />
            </div>
            <br />
            <div
                style={{
                    minHeight: 400,
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    backgroundColor: Colors.sectionColorDark,
                    color: "#FFFFFF",
                }}
            >
                <h1
                    style={{
                        marginTop: 80, // must be changed depending on parent size
                        fontWeight: 400,
                        alignSelf: "center",
                    }}
                >
                    Education & Experience
                </h1>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        minWidth: 650,
                        border: "1px solid red",
                        padding: 10,
                        flexWrap: "wrap-reverse",
                    }}
                >
                    <div style={{ width: 290 }}>
                        <h3>2017-2019</h3>
                        <br />
                        <hr />
                        <h3>University of Houston-Downtown</h3>
                        <p style={{ overflowWrap: "break-word" }}>
                            Bachelors Degree in Finance with an specialization
                            in Investments.
                        </p>
                    </div>
                    <div style={{ width: 290 }}>
                        <h3>2020-Present</h3>
                        <br />
                        <hr />
                        <h3>Free-Lance Projects</h3>
                        <p style={{ overflowWrap: "break-word" }}>
                            Developed and contributed to numerous projects using
                            modern technologies including: Javascript, Python,
                            MongoDB, mySQL, Express, React, React Native,
                            NodeJS, Django.
                        </p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    margin: "80px 0 80px 0",
                    backgroundColor: Colors.backgroundColorDark,
                }}
            >
                <Buttons />
            </div>
        </div>
    );
}
