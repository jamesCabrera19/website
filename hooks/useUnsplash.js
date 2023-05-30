// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
import unsplash from "../api/unsplash";
import axios from "axios";
import keys from "../keys/keys";
// photos?page=1&query=office

import { useState } from "react";

export default () => {
    const [link, setLink] = useState({});
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const fetchImg = async (term) => {
        try {
            setStatus("loading");
            const res = await axios.get(
                `https://api.unsplash.com/search/photos?page=1&client_id=${keys.unsplashAccessKey}&query=${term}?orientation=landscape`
            );
            // console.log(typeof res.data.results[0]);
            setLink(res.data.results[0]);

            setStatus("done");
            console.log("Term: ", term);
        } catch (error) {
            setErrorMessage(error);
        }
    };
    return [fetchImg, link, status, errorMessage];
};
