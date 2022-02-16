import { useContext, useEffect } from "react";
import { Context as ColorContext } from "../context/colorScheme";
import Link from "next/link";

export default function Portfolio() {
    const { state, themeSwitch, navbarSwitch, footerOptions } =
        useContext(ColorContext);

    useEffect(() => {
        footerOptions(state.backgroundColor);
        return () => {
            footerOptions(null); // screen is unfocused
            console.log("themeSwitch ran");
        };
    }, []);
    const cards = [
        {
            title: "Movie App",
            frameworks: [
                "React, React Native",
                "Express",
                "NodeJS",
                "Mongo DB",
            ],
        },
        {
            title: "Music App",
            frameworks: ["React, React Native", "Express", "NodeJS"],
        },
        { title: "Weather App", frameworks: ["React"] },
    ];

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
        },
        headers: {
            // h1, h2, h3
            color: state.headingColor,
            fontWeight: state.fontWeight,
        },
        text: {
            // <p/>
            fontWeight: 200, //state.fontWeight,
            color: state.fontColor,
        },
    };
    const buttonLinks = [
        {
            link: "/contact",
            title: "Contact",
        },
        {
            link: "/portfolio",
            title: "Portfolio",
        },
        {
            link: "/resume",
            title: "Resume",
        },
        {
            link: "https://www.linkedin.com/",
            title: "LinkedIn",
        },
        {
            link: "https://github.com/",
            title: "Github",
        },
    ];
    return (
        <div style={styles.container}>
            <div style={styles.sectionOne}>
                <h1 style={Object.assign({}, styles.headers)}>Applications</h1>
                <hr style={{ width: 100, border: "1px solid #8E8E8E" }} />
            </div>
            {/*  */}
            <div
                style={{
                    display: "flex",
                    backgroundColor: state.sectionColor,
                }}
            >
                {cards.map((item) => {
                    return (
                        <div
                            key={Math.random() * 99}
                            style={{
                                height: 520,
                                width: 280,
                                border: "1px solid #8E8E8E",
                                margin: "20px 20px 120px 20px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: 280,
                                    height: 280,
                                    borderBottom: "1px solid #8E8E8E",
                                    margin: "auto",
                                }}
                            >
                                {/* PHOTO PLACE HOLDER */}
                            </div>
                            <h2
                                style={{
                                    textAlign: "center",
                                    fontWeight: 200,
                                    color: state.fontColor,
                                    textTransform: "uppercase",
                                }}
                            >
                                {item.title}
                            </h2>
                            <div
                                style={{
                                    width: 80,
                                    height: 1,
                                    borderBottom: "1px solid #8E8E8E",
                                    margin: "auto",
                                }}
                            >
                                {/* This is a ---- line */}
                            </div>
                            <h3
                                style={{
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    fontWeight: state.fontWeight,
                                    color: state.fontColor,
                                }}
                            >
                                Frameworks
                            </h3>
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
                    );
                })}
            </div>

            <div
                style={{
                    display: "flex",
                    backgroundColor: state.backgroundColor,
                    height: 300,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div style={{ width: "80%", overflowWrap: "break-word" }}>
                    <p
                        style={{
                            fontSize: 20,
                            fontWeight: 200,
                            color: state.fontColor,
                            lineHeight: 1.4,
                        }}
                    >
                        All the applications listed above were developed solely
                        by me (James Cabrera) in approximately a 1.5 year
                        period. App designed was inspired by similar apps such
                        as Netflix and Apple Music. Additionally, all the code
                        for any of my applications is posted on my Github,
                        https://github.com/PlayaLimbo.
                    </p>
                </div>
            </div>
            <div
                style={{
                    // button link section
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    margin: "80px 0 0 0",
                    justifyContent: "center",
                    backgroundColor: state.sectionColor,
                }}
            >
                {buttonLinks.map((item) => (
                    <Link href={item.link} key={Math.random() * 99}>
                        <button
                            style={{
                                height: 50,
                                borderRadius: 0,
                                backgroundColor: "transparent",
                                border: "1px solid #505050",
                                textAlign: "center",
                                textDecoration: "none",
                                display: "inline-block",
                                padding: 15,
                                marginRight: 30,
                                color: state.fontColor,
                            }}
                        >
                            {item.title}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
