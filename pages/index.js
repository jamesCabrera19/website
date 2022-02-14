import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import HomePage from "./homePage";
// import Resume from "./resume";

export default function Home() {
    const globalStyles = {
        backgroundColorLight: "",
        backgroundColorDark: "",
        sectionLight: "",
        sectionDark: "",
        buttonLight: "",
        buttonDark: "",
        fontWeight: "",
        fontColorLight: "",
        fontColorDark: "",
        maxWidth: "",
    };
    return (
        <div>
            <Head>
                <title>JamesCabrera.io</title>
                <meta
                    name="description"
                    content="Website created using next.js"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomePage />
        </div>
    );
}
