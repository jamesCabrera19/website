// system imports
import { useState } from "react";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiSelector } from "react-icons/hi";

// Components
import MovieSpacer from "./movieSpacer";
import ModalNavigator from "./movieModalNavigator";
import MovieShadow from "./movieShadowHOC";
import SettingsBtn from "./movieButtons/settingsBtn";

export default function MovieSettings({ theme, setModal, switchTheme, modal }) {
    const [navigator, setNavigator] = useState(false); // navigator switch
    const [route, setRoute] = useState(""); // navigator route: Form || Subscription
    const [image, setImage] = useState({ image: null });

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // makes img to show from top
            alignItems: "center",
            margin: "64px auto",
            width: 400,
            height: 620,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: theme.background, // dark
            // border: "1px solid green",
        },
        imageContainer: {
            height: 120,
            width: 120,
            borderRadius: "50%",
            margin: "10px 0",
            position: "relative",
            border: image.image === null ? "1px solid red" : null,
        },
        image: {
            height: 120,
            width: 120,
            borderRadius: "50%",
        },
        imgInput: {
            position: "absolute",
            opacity: 0,
            borderRadius: "50%",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            cursor: "pointer",
        },
    };

    return (
        <MovieShadow modal={setModal}>
            {navigator ? (
                <ModalNavigator
                    route={route}
                    theme={theme}
                    navigator={setNavigator}
                />
            ) : (
                <div style={styles.container}>
                    <div style={styles.imageContainer}>
                        <img
                            src={image.image}
                            alt="user picture"
                            style={styles.image}
                        />
                        <input
                            style={styles.imgInput}
                            type="file"
                            name="myImage"
                            accept="image/*" // accept any file w an image MIME type
                            onChange={onImageChange}
                        />
                    </div>

                    <p>User Email Here</p>

                    <SettingsBtn
                        title="Name, Email, Password"
                        Icon={MdKeyboardArrowRight}
                        callback={() => {
                            setNavigator((prev) => !prev);
                            setRoute("form");
                        }}
                        options="isTop"
                        theme={theme}
                    />
                    <SettingsBtn
                        title="Subscriptions"
                        Icon={MdKeyboardArrowRight}
                        callback={() => {
                            setNavigator((prev) => !prev);
                            setRoute("Subs");
                        }}
                        options="isBottom"
                        theme={theme}
                    />
                    <MovieSpacer />
                    <SettingsBtn
                        title="Notifications"
                        Icon={() => (
                            <label>
                                <Toggle
                                    defaultChecked={
                                        theme.type === "light" ? true : false
                                    }
                                    icons={false}
                                />
                            </label>
                        )}
                        callback={() =>
                            console.log("Notifications Switch ON/OFF")
                        }
                        options="isTop"
                        theme={theme}
                    />

                    <SettingsBtn
                        title="Keep 'My Movies' on App"
                        Icon={() => (
                            <label>
                                <Toggle
                                    defaultChecked={
                                        modal.myMovies === true ? true : false
                                    }
                                    icons={false}
                                    onChange={() =>
                                        setModal((prev) => ({
                                            ...prev,
                                            myMovies: !prev.myMovies,
                                        }))
                                    }
                                />
                            </label>
                        )}
                        callback={() => console.log("Selector Form")}
                        options="isTop"
                        theme={theme}
                    />
                    <SettingsBtn
                        title="Max number of results per row"
                        Icon={HiSelector}
                        callback={() => console.log("Selector Form")}
                        options="isBottom"
                        theme={theme}
                    />
                    <MovieSpacer />

                    <SettingsBtn
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
                    <SettingsBtn
                        title={theme.type === "light" ? "light" : "dark"}
                        // Icon={HiSelector}
                        // callback={() => console.log("Selector Form")}
                        options="isBottom"
                        theme={theme}
                    />
                    {/* <div style={styles.button}>Current Theme</div> */}

                    <MovieSpacer />
                </div>
            )}
        </MovieShadow>
    );
}
