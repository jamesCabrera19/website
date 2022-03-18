import { useEffect, useContext, useState } from "react";
// context
import { Context as MovieActionContext } from "../../../context/movieActionsContext";
// icons
import { AiOutlinePlus, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
// css
import _styles from "../../../styles/movieApp.module.css";

//
// ! these btn are imported to [movie.js]

function IconBtn({ movie }) {
    // these are icon buttons => ex. play and download, share
    // callback can either be "addToList" or "removeFromList"
    const { state, addToList, removeFromList } = useContext(MovieActionContext);
    // const [track, setTrack] = useState(null); // takes in a movie.id Number
    const [track, setTrack] = useState(null);
    const [btn, setBtn] = useState({ add: true, remove: false });

    useEffect(() => {
        // Do something when the screen is focused
        let isActive = true;
        // console.log("UseEffect running");
        const trackStateChange = async (movieID) => {
            if (isActive) {
                try {
                    // returns value of the first element that matches the condition
                    const match = await state.find(
                        (item) => item.id === movieID
                    );
                    setTrack(match.id);
                } catch (error) {
                    return null;
                }
            }
        };
        trackStateChange(movie.id);
        return () => {
            // Do something when the screen is unfocused
            setTrack(null);
            // resetting button state
            // this is necessary to avoid displaying the "trash" icon every time the movie changes
            // this was a bug caused by calling setBtn() onClick.
            setBtn({ add: true, remove: false });
            isActive = false;
        };
    }, [movie, state]);

    const styles = {
        container: {
            width: 60,
            height: 40,
            borderRadius: 4,
            border: "1px solid rgb(230, 89, 137)", // same as theme.background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
        },
    };
    return (
        <>
            {btn.add ? (
                <div
                    className={_styles.iconButton}
                    style={styles.container}
                    onClick={() => {
                        setBtn((prev) => ({
                            add: !prev.add,
                            remove: !prev.remove,
                        })); // switching state of buttons
                        addToList(movie);
                    }}
                >
                    {track !== null ? (
                        <AiOutlineCheck size={30} color="rgb(109, 252, 0)" />
                    ) : (
                        <AiOutlinePlus size={30} color="rgb(230, 89, 137)" />
                    )}
                </div>
            ) : (
                <div
                    className={_styles.iconButton}
                    style={styles.container}
                    onClick={() => {
                        setBtn((prev) => ({
                            add: !prev.add,
                            remove: !prev.remove,
                        })); // switching state of buttons
                        removeFromList(movie.id);
                    }}
                >
                    <AiOutlineDelete size={30} color="rgb(230, 89, 137)" />
                </div>
            )}
        </>
    );
}
// * exported to Card, MovieResult
function IconBtnRegular({ callback, type }) {
    return (
        <div
            style={{
                width: 60,
                height: 40,
                borderRadius: 4,
                border: "1px solid rgb(230, 89, 137)", // same as theme.background
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={() => callback()}
            className={_styles.iconButton}
        >
            {type === "download" ? (
                <BiDownload size={30} color="rgb(230, 89, 137)" />
            ) : (
                <MdIosShare size={30} color="rgb(230, 89, 137)" />
            )}
        </div>
    );
}

export { IconBtn, IconBtnRegular };
