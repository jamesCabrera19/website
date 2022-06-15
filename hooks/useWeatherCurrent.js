import { useState } from "react";
import axios from "axios";

export default () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = async (lat, lon) => {
        const key = "59efbd007bb3959e479a32a2bbecdd52";
        const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;
        try {
            setStatus("loading");
            const res = await axios.get(link);
            setData(res.data);
            setStatus("done");
        } catch (error) {
            setErrorMessage(error);
        }
    };
    return [fetchData, data, status, errorMessage];
};
