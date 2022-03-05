import { useEffect, useContext, useState } from "react";
import { Context as MovieActionContext } from "../../context/movieActionsContext";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

export default function IconButton({ action, movie }) {
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
