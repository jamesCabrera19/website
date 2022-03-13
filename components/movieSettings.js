import MovieShadow from "./movieShadowHOC";
import MovieSpacer from "./movieSpacer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiSelector } from "react-icons/hi";
import { SquareButton } from "./movieButtons";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";

// function SquareButton({ title, IconName, options, callback }) {
//     const styles = {
//         options: {
//             borderTop: "1px solid red",
//         },
//         button: {
//             height: 45,
//             width: "90%",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "0 6px",
//             cursor: "pointer",
//             backgroundColor: "#F2F2F7",
//             // borderRight: "1px solid red",
//             // borderLeft: "1px solid red",
//             borderTop: options === "isTop" ? "1px solid transparent" : null,
//             borderBottom: "1px solid rgba(240, 220, 240, 0.9)",
//             borderTopLeftRadius: options === "isTop" ? 4 : null,
//             borderTopRightRadius: options === "isTop" ? 4 : null,
//             borderBottomRightRadius: options === "isBottom" ? 4 : null,
//             borderBottomLeftRadius: options === "isBottom" ? 4 : null,
//         },
//         faded: {
//             color: "rgba(107, 107, 107, 0.6)",
//         },
//     };
//     if (IconName && callback) {
//         return (
//             <div style={styles.button} onClick={() => callback()}>
//                 <p>{title}</p>
//                 <IconName size={30} color="grey" />
//             </div>
//         );
//     } else {
//         return (
//             <div style={styles.button}>
//                 <p style={styles.faded}>{title}</p>
//             </div>
//         );
//     }
// }

export default function MovieSettings({ theme, setModal, switchTheme }) {
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
                    Icon={MdKeyboardArrowRight}
                    callback={() => console.log("Open Contact Form")}
                    options="isTop"
                    theme={theme}
                />
                <SquareButton
                    title="Subscriptions"
                    Icon={MdKeyboardArrowRight}
                    callback={() => console.log("Subscriptions Form")}
                    options="isBottom"
                    theme={theme}
                />
                <MovieSpacer />
                <SquareButton
                    title="Notifications"
                    Icon={MdKeyboardArrowRight}
                    callback={() => console.log("Notifications Switch ON/OFF")}
                    options="isTop"
                    theme={theme}
                />
                <SquareButton
                    title="Max number of results per row"
                    Icon={HiSelector}
                    callback={() => console.log("Selector Form")}
                    options="isBottom"
                    theme={theme}
                />
                <MovieSpacer />

                <SquareButton
                    title="Switch Theme"
                    Icon={() => (
                        <label>
                            <Toggle
                                defaultChecked={
                                    theme.type === "light" ? true : false
                                }
                                icons={false}
                                onChange={() => switchTheme()}
                            />
                        </label>
                    )}
                    options="isTop"
                    callback={() => {}}
                    theme={theme}
                />
                <SquareButton
                    title={theme.type === "light" ? "light" : "dark"}
                    // Icon={HiSelector}
                    // callback={() => console.log("Selector Form")}
                    options="isBottom"
                    theme={theme}
                />
                {/* <div style={styles.button}>Current Theme</div> */}

                <MovieSpacer />
            </div>
        </MovieShadow>
    );
}
