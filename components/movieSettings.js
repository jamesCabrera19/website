import MovieShadow from "./movieShadowHOC";
import MovieSpacer from "./movieSpacer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiSelector } from "react-icons/hi";
import { SquareButton } from "./movieButtons";

export default function MovieSettings({ theme, setModal }) {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // makes img to show from top
            alignItems: "center",
            margin: "64px auto",
            width: 400,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.background, // dark
            // border: "1px solid green",
        },
        button: {
            height: 30,
            width: "90%",
            borderRadius: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid red",
        },
        image: {
            height: 120,
            width: 120,
            borderRadius: "50%",
            margin: "30px 0",
            border: "1px solid red",
        },
    };

    return (
        <MovieShadow modal={setModal}>
            <div style={styles.container}>
                <div style={styles.image}></div>
                <div
                    style={{
                        margin: "30px 0",
                    }}
                >
                    user email here
                </div>
                <SquareButton
                    title="Name, Email, Password"
                    IconName={MdKeyboardArrowRight}
                    callback={() => console.log("Open Contact Form")}
                    options="isTop"
                />
                <SquareButton
                    title="Subscriptions"
                    IconName={MdKeyboardArrowRight}
                    callback={() => console.log("Subscriptions Form")}
                    options="isBottom"
                />
                <MovieSpacer />
                <SquareButton
                    title="Notifications"
                    IconName={MdKeyboardArrowRight}
                    callback={() => console.log("Notifications Switch ON/OFF")}
                    options="isTop"
                />
                <SquareButton
                    title="Max number of results per row"
                    IconName={HiSelector}
                    callback={() => console.log("Selector Form")}
                    options="isBottom"
                />
                <MovieSpacer />
                <SquareButton
                    title="Switch theme"
                    IconName={HiSelector}
                    callback={() => console.log("Selector Form")}
                    options="isTop"
                />
                <SquareButton
                    title="Current Theme"
                    // IconName={HiSelector}
                    // callback={() => console.log("Selector Form")}
                    options="isBottom"
                />
                {/* <div style={styles.button}>Current Theme</div> */}

                <MovieSpacer />
            </div>
        </MovieShadow>
    );
}
