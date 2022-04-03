import { useContext } from "react";
import ReactPlayer from "react-player/lazy";
//context
import { Context as AuthContext } from "../../context/movieAuthContext";

export default function Video({ videoKey, onStart, onEnd, setVideo }) {
    const {
        state: { email, token },
        removeCredits,
    } = useContext(AuthContext);

    const handleMovieEnd = () => {
        removeCredits({ amount: 3, email, token });
        setVideo((prev) => ({ ...prev, play: !prev.play }));
    };

    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            controls={true}
            width="100%"
            height="100%"
            // ref={videoRef}
            config={{
                youtube: { playerVars: { embedOptions: 1 } },
            }}
            onEnded={handleMovieEnd}
        />
    );
}
