import "../styles/globals.css";
import Layout from "../components/layout";
import { Provider as ThemeProvider } from "../context/colorScheme";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
