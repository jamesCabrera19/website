import "../styles/globals.css";
import Layout from "../components/layout";
import { Provider as ThemeProvider } from "../context/colorScheme";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <>
                <NextNProgress />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        </ThemeProvider>
    );
}

export default MyApp;
