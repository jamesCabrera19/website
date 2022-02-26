import axios from "axios";
import keys from "../keys/keys";

export default axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: `Bearer ${keys.movieDBtoken}`,
    },
});

// search api => https://api.themoviedb.org/3/search/movie?&query=
