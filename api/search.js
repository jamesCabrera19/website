import axios from "axios";
import keys from "../keys/keys";

export default axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?&query=`,
    headers: {
        Authorization: `Bearer ${keys.movieDBtoken}`,
    },
});
