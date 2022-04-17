import Slider from "../components/slider";
import _styles from "../styles/buttons.module.css";
import ButtonContainer from "../components/buttons";

export default function HomePage({ colorScheme }) {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between", // horizontal position in container
            padding: 0,
            fontFamily: colorScheme.fontFamily,
            backgroundColor: colorScheme.sectionColor,
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
            height: 800,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: colorScheme.backgroundColor,
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
            backgroundColor: colorScheme.sectionColor,
        },
        sectionFour: {
            // button link section
            height: 200,
            display: "flex",
            alignItems: "center",
            margin: "80px 0 0 0",
            justifyContent: "center",
            backgroundColor: colorScheme.backgroundColor,
        },
        text: {
            // <p/>
            fontWeight: colorScheme.fontWeight,
            color: colorScheme.fontColor,
        },
        headers: {
            // h1, h2, h3
            color: colorScheme.headingColor,
            fontWeight: colorScheme.fontWeight,
        },
        btn: {
            height: 50,
            borderRadius: 0,
            border: `1px solid ${colorScheme.buttonColor}`,
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            padding: 15,
            marginRight: 30,
            // backgroundColor: colorScheme.buttonColor, // replace by css hover effect
            // color: colorScheme.buttonFontColor, // replace by css hover effect
            cursor: "pointer",
        },
    };
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
                        apps using Mongo DB, Express, React / React Native and
                        NodeJS.
                    </p>
                    <br />
                    <br />
                    <button style={styles.btn} className={_styles.btn}>
                        Contact Me
                    </button>
                    <button style={styles.btn} className={_styles.btn}>
                        View Work
                    </button>
                </div>
            </div>
            <div style={styles.sectionTwo}>
                <h1 style={Object.assign({ marginTop: 75 }, styles.headers)}>
                    Current Projects
                </h1>
                <hr style={{ width: 100, border: "1px solid #8E8E8E" }} />
                <Slider
                    backgroundColor={colorScheme.backgroundColor}
                    fontColor={colorScheme.fontColor}
                    headerStyles={styles.headers}
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
                <ButtonContainer borderColor={colorScheme.buttonColor} />
            </div>
        </div>
    );
}
