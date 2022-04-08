import { useContext, useEffect } from "react";
import { Context as ColorContext } from "../context/colorScheme";
import { AiOutlineCheck } from "react-icons/ai";

function Project({ props }) {
    const { state } = useContext(ColorContext);

    return (
        <div>
            <h3
                style={{
                    fontWeight: state.fontWeight,
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
            <div
                style={{
                    border: "1px solid red",
                    width: "95%",
                    margin: "-20px 0 -10px 0",
                }}
            ></div>

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
            title: "Video streaming application",
            description_one:
                "Designed a full-stack video streaming application for iOS and web devices using NextJS, and React Native",
            description_two:
                "Implemented a RESTful API server for user authentication using NodeJS, Express, and Mongo DB.",
            description_three: null,
        },
        musicApp: {
            title: "Music streaming application",
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
            border: "1px solid red",
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
        list: {
            listStyle: "none",
            marginTop: 30,
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.intro}>
                <h1 style={styles.text}>Jaime Cabrera</h1>
                <p style={styles.text}>Richardson, TX</p>
                <h3 style={styles.text}>
                    Front-End Developer | Web Developer | iOS Developer |
                    Back-End Developer
                </h3>
            </div>
            <HeadingHOC>
                <ul style={styles.list}>
                    <li>Efficiency Increase: Javascript</li>
                    <li>Cost Savings: Typescript</li>
                    <li>Staff Management: React, React Native</li>
                </ul>
            </HeadingHOC>
            {/*  */}
            <HeadingHOC title="Professional Summary">
                <ul style={styles.list}>
                    <li>Efficiency Increase: Javascript</li>
                    <li>Cost Savings: Typescript</li>
                    <li>Staff Management: React, React Native</li>
                </ul>
            </HeadingHOC>
            <HeadingHOC title="Key Skills">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                    }}
                >
                    <ul style={styles.list}>
                        <li>
                            <AiOutlineCheck />
                            Javascript
                        </li>
                        <li>
                            <AiOutlineCheck />
                            Typescript
                        </li>
                        <li>
                            <AiOutlineCheck />
                            React, React Native
                        </li>
                    </ul>
                    <ul style={styles.list}>
                        <li>
                            <AiOutlineCheck />
                            NodeJS
                        </li>
                        <li>
                            <AiOutlineCheck />
                            ExpressJS
                        </li>
                        <li>
                            <AiOutlineCheck />
                            MondoDB
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
                    <h3 style={styles.text}>
                        Bachelor of Finance with concentration in Financial
                        Investments{" "}
                    </h3>
                    <h4 style={styles.text}>
                        {" "}
                        University of Houston-Downtown | 2019
                    </h4>
                </div>
            </HeadingHOC>
        </div>
    );
}
