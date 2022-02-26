import Image from "next/image";

export default function LatestMovie({ src, width, callback, setModal }) {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            // margin: "100px",
            // padding: "100px",
            // border: "1px solid yellow",
            // zIndex: 1,
        },
        image: {
            width: 720,
            borderRadius: 10,
            cursor: "pointer",
        },
    };

    return src ? (
        <div style={styles.container}>
            <img
                // loader={`https://image.tmdb.org/t/p/w${width}/${src.backdrop_path}`}
                src={`https://image.tmdb.org/t/p/${width}/${src.backdrop_path}`}
                alt="Picture of the author"
                style={styles.image}
                onClick={() => {
                    callback(src); // clickedMovie()
                    setModal((prev) => !prev);
                }}
            />
        </div>
    ) : null;
}
