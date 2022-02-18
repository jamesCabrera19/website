import Head from "next/head";
import { useContext, useEffect } from "react";
import HomePage from "./homePage";
import { Context as ColorContext } from "../context/colorScheme";

export default function Home() {
    const { state, themeSwitch } = useContext(ColorContext);

    // useEffect(() => {
    //     themeSwitch(); // run only at night
    // }, []);

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
            <HomePage colorScheme={state} />
        </div>
    );
}
