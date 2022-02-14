import Link from "next/link";
import Slider from "../components/card";

export default function HomePage({ colorScheme }) {
    const day = "day";
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between", // horizontal position in container
            // textAlign: "center", // vertical position in container
            backgroundColor:
                day === "night"
                    ? colorScheme.sectionDark
                    : colorScheme.sectionLight,
            padding: 0,
            // margin: "20px 0",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        sectionOne: {
            // intro
            height: 450,
            padding: 20,
            display: "flex",
            alignItems: "center",
        },
        sectionTwo: {
            // current projects
            backgroundColor: colorScheme.backgroundColorLight,
            height: 800,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            // color: "#FFFFFF",
        },
        sectionThree: {
            // education and experience
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignContent: "center",
            backgroundColor: colorScheme.sectionLight,
        },
        sectionFour: {
            // button link section
            height: 200,
            display: "flex",
            alignItems: "center",
            margin: "80px 0 0 0",
            backgroundColor: colorScheme.backgroundColorLight,
            justifyContent: "center",
        },
        text: {
            // <p/>
            fontWeight: colorScheme.fontWeight,
            color:
                day === "night"
                    ? colorScheme.fontColorDark
                    : colorScheme.fontColorLight,
        },
        headers: {
            // h1, h2, h3
            color: colorScheme.headingColor,
            fontWeight: colorScheme.fontWeight,
        },
        btn: {
            height: 50,
            borderRadius: 0,
            backgroundColor: colorScheme.buttonLight,
            border: "0px solid #C0D4FF",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            color: colorScheme.buttonFontColor,
            padding: 15,
            marginRight: 30,
        },
        btnLinks: {
            height: 50,
            borderRadius: 0,
            backgroundColor: "transparent",
            border: "1px solid #505050",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            color: colorScheme.fontColorDark,
            padding: 15,
            marginRight: 30,
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
                <div style={{ margin: "0 50px" }}>
                    <h1 style={styles.headers}>Jaime Cabrera</h1>
                    <hr
                        style={{
                            width: 40,
                            float: "left",
                            border: "1px solid #8E8E8E",
                        }}
                    />
                    <br />
                    <p style={styles.text}>
                        Hello, I am a Javascript developer specialized in
                        frontend and backend development for web and iOS
                        applications.
                    </p>
                    <p style={styles.text}>
                        I have over one year of experience building scalable web
                        apps using Mongo DB, Express, React-React Native and
                        NodeJS.
                    </p>
                    <br />
                    <br />
                    <button style={styles.btn}>Contact Me</button>
                    <button style={styles.btn}>View Work</button>
                </div>
            </div>
            <div style={styles.sectionTwo}>
                <h1 style={Object.assign({ marginTop: 75 }, styles.headers)}>
                    Current Projects
                </h1>
                <hr style={{ width: 100, border: "1px solid #8E8E8E" }} />

                <Slider
                    backgroundColor={colorScheme.backgroundColorLight}
                    fontColor={colorScheme.fontColorLight}
                />
            </div>
            <br />
            <div style={styles.sectionThree}>
                <h1
                    style={Object.assign(
                        {
                            marginTop: 60, // must be changed depending on parent size
                            alignSelf: "center",
                        },
                        styles.headers
                    )}
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
                        // border: "1px solid red",
                        padding: 10,
                        flexWrap: "wrap-reverse",
                    }}
                >
                    <div style={{ width: 290 }}>
                        <h3 style={styles.headers}>2017-2019</h3>
                        <br />
                        <hr />
                        <h3 style={styles.headers}>
                            University of Houston-Downtown
                        </h3>
                        <p
                            style={Object.assign(
                                { overflowWrap: "break-word" },
                                styles.text
                            )}
                        >
                            Bachelors Degree in Finance with an specialization
                            in Financial Investments.
                        </p>
                    </div>
                    <div style={{ width: 290 }}>
                        <h3 style={styles.headers}>2020-Present</h3>
                        <br />
                        <hr />
                        <h3 style={styles.headers}>Free-Lance Projects</h3>
                        <p
                            style={Object.assign(
                                { overflowWrap: "break-word" },
                                styles.text
                            )}
                        >
                            Developed and contributed to numerous projects using
                            modern technologies including: Javascript, Python,
                            MongoDB, mySQL, Express, React, React Native,
                            NodeJS, Django.
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles.sectionFour}>
                {buttonLinks.map((item) => (
                    <Link href={item.link} key={Math.random() * 99}>
                        <button style={styles.btnLinks}>{item.title}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
