import axios from "axios";
import keys from "../keys/keys";

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: keys.unsplashAccessKey,
    },
});

// search api => https://api.themoviedb.org/3/search/movie?&query=
