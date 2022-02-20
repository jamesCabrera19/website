import "../styles/globals.css";
import Layout from "../components/layout";
import { Provider as ThemeProvider } from "../context/colorScheme";
import { Provider as MovieDataProvider } from "../context/movieDataContext";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <MovieDataProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MovieDataProvider>
        </ThemeProvider>
    );
}

export default MyApp;
