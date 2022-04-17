// system imports
import { useState, useContext } from "react";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiSelector } from "react-icons/hi";
// context
import { Context as AuthContext } from "../../context/movieAuthContext";
import { Context as MovieDataContext } from "../../context/movieDataContext";

// Components
import MovieSpacer from "./movieSpacer";
import ModalNavigator from "./movieModalNavigator";
import MovieShadow from "./movieShadowHOC";
import SettingsBtn from "./movieButtons/settingsBtn";
// hooks
import useLocalStorage from "../../hooks/useLocalStorage";

export default function MovieSettings({ theme, setModal, switchTheme, modal }) {
    const {
        state: { email },
    } = useContext(AuthContext);

    const {
        state: { maxResults },
        renderResult,
    } = useContext(MovieDataContext);

    const [navigator, setNavigator] = useState(false); // navigator switch
    const [route, setRoute] = useState(""); // navigator route: Form || Subscription
    const [image, setImage] = useState({ image: null });
    // const [value, setValue] = useLocalStorage("dark", false);

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
        selector: {
            height: 45,
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 6px",
            cursor: "pointer",
            backgroundColor: "#F2F2F7",
            borderBottom: `1px solid ${theme.borderColor}`,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
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

                    <p>{email}</p>

                    <SettingsBtn
                        title="Name, Email, Password"
                        Icon={MdKeyboardArrowRight}
                        callback={() => {
                            setNavigator((prev) => !prev);
                            setRoute("Form");
                        }}
                        options="isTop"
                        theme={theme}
                    />
                    <SettingsBtn
                        title="Subscriptions"
                        Icon={MdKeyboardArrowRight}
                        callback={() => {
                            setNavigator((prev) => !prev);
                            setRoute("Subscriptions");
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
                                    onChange={() => {
                                        setModal((prev) => ({
                                            ...prev,
                                            myMovies: !prev.myMovies,
                                        }));
                                    }}
                                />
                            </label>
                        )}
                        callback={() => console.log("Selector Form")}
                        options="isMiddle"
                        theme={theme}
                    />

                    <div style={styles.selector}>
                        <p>Select max number of results</p>
                        <select
                            style={{
                                border: `1px solid ${theme.borderColor}`,
                                borderRadius: 4,
                                background: "transparent",
                                fontSize: 16,
                            }}
                            name="number"
                            value={maxResults}
                            onSubmit={(e) => {
                                const intValue = parseInt(e.target.value);
                                renderResult(intValue);
                            }}
                        >
                            <option value="10">10</option>
                            <option value="13">13</option>
                            <option value="16">16</option>
                            <option value="19">max</option>
                        </select>
                    </div>

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
                                    onChange={() => {
                                        switchTheme();
                                    }}
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
