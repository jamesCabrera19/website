import { useEffect, useContext, useState } from "react";
// context
// icons
import { AiOutlinePlus, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

import { Context as MovieActionContext } from "../../../context/movieActionsContext";
// css
import _styles from "../../../styles/movieApp.module.css";
// ! this btn are imported to [movie.js]
import Toast from "../../toast/toast";

export default function ActionButton({ movie, theme, email }) {
    // callback can either be "addToList" or "removeFromList"
    const { state, addToList, removeFromList } = useContext(MovieActionContext);
    const [track, setTrack] = useState(null);
    const [btn, setBtn] = useState({ add: true, remove: false });
    //
    //
    //
    const [list, setList] = useState([]);
    let toastProperties = null;
    //
    //
    //
    const showToast = (type) => {
        switch (type) {
            case "Add":
                toastProperties = {
                    id: list.length + 1,
                    title: "Movie Added",
                    description: "Movie was added to my movies library",
                    backgroundColor: "#5bc0de",
                };
                break;
            case "Remove":
                toastProperties = {
                    id: list.length + 1,
                    title: "Movie was removed",
                    description: "Movie was removed from my movies",
                    backgroundColor: "red",
                };
                break;

            default:
                toastProperties = [];
        }
        setList([...list, toastProperties]);
    };

    useEffect(() => {
        // Do something when the screen is focused
        let isActive = true;

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

    return (
        <>
            {btn.add ? (
                <>
                    <div
                        className={_styles.iconButton}
                        style={theme}
                        onClick={() => {
                            setBtn((prev) => ({
                                add: !prev.add,
                                remove: !prev.remove,
                            })); // switching state of buttons
                            showToast("Add");
                        }}
                    >
                        {/* checking if the movie is in <MyMovies/> */}
                        {track !== null ? (
                            <AiOutlineCheck
                                color="rgb(109, 252, 0)"
                                size={30}
                            />
                        ) : (
                            <AiOutlinePlus
                                onClick={() => addToList(movie, email)}
                                color="rgb(230, 89, 137)"
                                size={30}
                            />
                        )}
                    </div>
                    <Toast
                        toastList={list}
                        position="buttom-right"
                        setList={setList}
                    />
                </>
            ) : (
                <>
                    <div
                        className={_styles.iconButton}
                        style={theme}
                        onClick={() => {
                            setBtn((prev) => ({
                                add: !prev.add,
                                remove: !prev.remove,
                            })); // switching state of buttons
                            removeFromList(movie.id, movie, email);
                            showToast("Remove");
                        }}
                    >
                        <AiOutlineDelete size={30} color="rgb(230, 89, 137)" />
                    </div>
                    <Toast
                        toastList={list}
                        position="buttom-right"
                        setList={setList}
                    />
                </>
            )}
        </>
    );
}
