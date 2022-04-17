import { useContext, useEffect } from "react";
import { Context as ColorContext } from "../context/colorScheme";
import { BiCheck } from "react-icons/bi";

function Project({ props }) {
    const { state } = useContext(ColorContext);

    return (
        <div>
            <h3
                style={{
                    fontWeight: "500",
                    fontFamily: state.fontFamily,
                }}
            >
                {props.title} <span>| Project</span>
            </h3>
            <ul>
                <li>
                    <p>{props.description_one}</p>
                </li>
                <li>
                    <p>{props.description_two}</p>
                </li>
                {props.description_three ? (
                    <li>
                        <p>{props.description_three}</p>
                    </li>
                ) : null}
            </ul>
        </div>
    );
}

function HeadingHOC({ children, title }) {
    const { state } = useContext(ColorContext);

    return (
        <div style={{ margin: "-50px 50px 50px 50px" }}>
            <h2
                style={{
                    fontWeight: state.fontWeight,
                    fontFamily: state.fontFamily,
                }}
            >
                {title}
            </h2>
            <hr
                style={{
                    margin: "-20px 0 -10px 0",
                    border: "1px solid black",
                    width: "95%",
                }}
            />

            {children}
        </div>
    );
}
export default function Resume() {
    const { state, themeSwitch, navbarSwitch } = useContext(ColorContext);
    // useEffect(() => {
    //     navbarSwitch();
    //     return () => {
    //         themeSwitch(); // screen is unfocused
    //         console.log("themeSwitch ran");
    //     };
    // }, []);

    const resumeProject = {
        videoApp: {
            title: "Video Streaming App",
            description_one:
                "Designed a full-stack video streaming application for iOS and web devices using NextJS, and React Native",
            description_two:
                "Implemented a RESTful API server for user authentication using NodeJS, Express, and Mongo DB.",
            description_three: null,
        },
        musicApp: {
            title: "Music Streaming App",
            description_one:
                "Developed a music streaming application for iOS and web devices using React Native, NextJS, and React Redux.",
            description_two:
                "Incorporated a web scraping bot that allows users stream and download over 100+ songs using Typescript, NodeJS and Express.",
            description_three: null,
        },
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "150px auto",
            width: 720,
            // border: "1px solid red",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
        intro: {
            margin: "50px",
            // border: "1px solid red",
            padding: 0,
        },
        breakLine: {
            border: "1px solid red",
            width: "95%",
            margin: "-20px 0 -10px 0",
        },
        text: {
            fontWeight: state.fontWeight,
            fontFamily: state.fontFamily,
        },
        textBold: {
            fontWeight: "600", //state.fontWeight,
            fontFamily: state.fontFamily,
            fontSize: 16,
            marginBottom: 0,
        },
        list: {
            listStyle: "none",
            marginTop: 30,
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.intro}>
                <h1 style={styles.text}>Jaime Cabrera</h1>
                <hr
                    style={{
                        margin: "-20px 0 -10px 0",
                        border: "1px solid black",
                        width: "95%",
                    }}
                />
                <p style={styles.text}>Richardson, TX</p>
                <h3 style={styles.textBold}>
                    Front-End Developer | Back-End Developer | Web Developer |
                    iOS Developer | Android Developer
                </h3>
            </div>
            <HeadingHOC title="Professional Summary">
                <p
                    style={{
                        fontWeight: state.fontWeight,
                        fontFamily: state.fontFamily,
                        margin: "30px 0 0 0",
                    }}
                >
                    Junior React developer with over two years of experience
                    building React applications. Eager to obtain a challenging
                    position where I can grow my passion towards software
                    architecture and design combined with sensitivity to serve
                    the needs of the business.
                </p>
                {/* <ul style={styles.list}>
                    <li>Efficiency Increase: Javascript</li>
                    <li>Cost Savings: Typescript</li>
                    <li>Staff Management: React, React Native</li>
                </ul> */}
            </HeadingHOC>

            <HeadingHOC title="Key Skills">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginLeft: -60,
                    }}
                >
                    <ul style={styles.list}>
                        <li>
                            <BiCheck />
                            Javascript
                        </li>
                        <li>
                            <BiCheck />
                            Typescript
                        </li>
                        <li>
                            <BiCheck />
                            Python
                        </li>
                    </ul>
                    <ul style={styles.list}>
                        <li>
                            <BiCheck />
                            NodeJS
                        </li>
                        <li>
                            <BiCheck />
                            React | React Native
                        </li>
                        <li>
                            <BiCheck />
                            ExpressJS
                        </li>
                    </ul>
                    <ul style={styles.list}>
                        <li>
                            <BiCheck />
                            NextJS
                        </li>
                        <li>
                            <BiCheck />
                            MongoDB
                        </li>
                        <li>
                            <BiCheck />
                            SQL
                        </li>
                    </ul>
                </div>
            </HeadingHOC>
            <HeadingHOC title="Experience">
                <Project props={resumeProject.videoApp} />
                <Project props={resumeProject.musicApp} />
            </HeadingHOC>
            <HeadingHOC title="Education">
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3 style={styles.textBold}>
                        Bachelor of Business Administration in Finance
                    </h3>
                    <h4 style={styles.text}>
                        University of Houston-Downtown | 2019
                    </h4>
                </div>
            </HeadingHOC>
            <div style={{ height: 30 }} />
        </div>
    );
}
