import Image from "next/image";
import useSavedMovie from "../hooks/useSavedMovie";
const ImageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500${src}`;

const MovieResults = ({ state, callback }) => {
    const [value, valueSetter] = useSavedMovie();
    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "scroll",
        },
        card: {
            margin: "0 10px 0 10px",
            minWidth: "150px",
            height: 200,
            overflow: "hidden",
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
            position: "relative",
            // border: "1px solid red",
        },
        image: {
            width: "100%",
        },
    };

    return (
        <div style={styles.container}>
            {state.map((movie) => {
                return (
                    <div
                        style={styles.card}
                        key={movie.id}
                        // onClick={() => clickedMovie(item)}
                        onClick={() => {
                            callback(movie);
                            valueSetter(movie);
                        }}
                    >
                        {movie.poster_path ? (
                            // NextJS <Image/> fails/breaks if movie.poster_path is non existing
                            <Image
                                loader={ImageLoader}
                                src={movie.poster_path}
                                layout="fill"
                                alt="Movie Poster"
                            />
                        ) : (
                            // fallback
                            <img
                                style={styles.image}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default MovieResults;
