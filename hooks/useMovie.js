import { useState } from "react";

export default (movieObj) => {
    const [movie, setMovie] = useState({});
    console.log(movieObj);
    if (movieObj) setMovie(movieObj);

    return [movie, setMovie];
};
