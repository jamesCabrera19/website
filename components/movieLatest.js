import Image from "next/image";

function ImageLoader({ src }) {
    return `https://image.tmdb.org/t/p/original${src}`;
}

export default function LatestMovie({ src, width, callback, setModal }) {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            // border: "1px solid red",
            maxWidth: 640,
            minHeight: 400,
            borderRadius: 10,
            margin: "auto",
            cursor: "pointer",
        },
    };

    return src ? (
        <div
            style={styles.container}
            onClick={() => {
                callback(src); // clickedMovie()
                setModal((prev) => ({
                    ...prev,
                    movieModal: true,
                }));
            }}
        >
            <Image
                loader={ImageLoader}
                src={src.backdrop_path}
                // src={`https://image.tmdb.org/t/p/${width}/${src.backdrop_path}`}
                // width={500} // not needed when using layout="fill"
                // height={500}
                layout="fill"
                alt="Movie Poster"
            />
        </div>
    ) : null;
}
