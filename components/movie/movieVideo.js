import ReactPlayer from "react-player/lazy";

export default function Video({ videoKey, onStart, onEnd, setVideo }) {
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            controls={true}
            width="100%"
            height="100%"
            // ref={videoRef}
            config={{
                youtube: {
                    playerVars: { embedOptions: 1 },
                },
            }}
            onEnded={() => {
                setVideo((prev) => ({
                    ...prev,
                    play: !prev.play,
                }));
                // removeCredits({
                //     amount: 1,
                //     email,
                //     token,
                // });
            }}
        />
    );
}
