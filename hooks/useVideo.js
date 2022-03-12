import { useState } from "react";
import movieApi from "../api/movieApi";

//
export default () => {
    const [video, setVideo] = useState([]);
    const [videoErrorMessage, setErrorMessage] = useState("");

    const fetchVideo = async (movieID) => {
        try {
            console.log("useVideo Ran");
            const res = await movieApi.get(
                `/movie/${movieID}/videos?&language=en-US`
            );
            // const [videoKey] = videoArr.slice(1, 2);
            const [video] = res.data.results.slice(0, 1);
            setVideo(video);
            // console.log(video);
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    };
    return [fetchVideo, video, videoErrorMessage];
};
//dQw4w9WgXcQ
