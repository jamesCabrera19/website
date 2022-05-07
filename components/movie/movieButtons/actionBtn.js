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
    const { state, addToList, removeFromList } = useContext(MovieActionContext);
    const [btn, setBtn] = useState({ add: true, remove: false });
    const [track, setTrack] = useState(null); // => movie in db tracker
    const [list, setList] = useState([]); // => notification array
    let toastProperties = null;

    const handleToast = (type) => {
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
    // console.log("Appended Movies: ", state);

    // movie deleted and saved response is workking, however, whats not working is
    // the actionbutton fails to register movies coming from DB
    // why? because they havent been appended to the MovieActionContext
    // movies cominng from DB need to be appended to state => because of 2 things:
    // one: we need to re-render screen when state is changed
    // second: useEffect is only Running on MovieActionContext and no other state.
    // FIRST. APPEND DB MOVIES TO MovieActionContext, then rerender screen

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
                            handleToast("Add");
                            addToList(movie, email);
                            setBtn((prev) => ({
                                add: !prev.add,
                                remove: !prev.remove,
                            })); // switching state of buttons
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
                                // onClick={() => addToList(movie, email)}
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
                            removeFromList(movie.id, movie, email);
                            setBtn((prev) => ({
                                add: !prev.add,
                                remove: !prev.remove,
                            })); // switching state of buttons

                            handleToast("Remove");
                        }}
                    >
                        <AiOutlineDelete
                            size={30}
                            color="rgb(230, 89, 137)"
                            // onClick={() => {
                            //     // removeFromList(movie.id, movie, email);
                            //     console.log("deleted");
                            // }}
                        />
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
