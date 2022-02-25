import Link from "next/link";

export default function MovieResults({ state, callback }) {
    const styles = {
        container: {
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "64px 0",
            backgroundColor: "rgb(42, 44, 51)", // dark // used if image fails to load
        },
        card: {
            margin: "10px auto 10px auto",
            minWidth: "250px",
            maxWidth: "250px",
            height: 373,
            overflow: "hidden",
            position: "relative",
            textAlign: "center",
            // border: "1px solid red",
            borderRadius: 10,
        },
        image: {
            width: "100%",
            cursor: "pointer",
        },
    };
    return (
        <div style={styles.container}>
            {state.map((movie) => {
                return (
                    <Link
                        key={Math.random() * 999}
                        href={`/apps/movieapp/${movie.id}`}
                    >
                        <div
                            key={Math.random() * 999}
                            style={styles.card}
                            onClick={() => {
                                callback(movie); // clickedMovie()
                            }}
                        >
                            <img
                                style={styles.image}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
