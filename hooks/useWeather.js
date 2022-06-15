import { useState } from "react";
import axios from "axios";
export default () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = async (city) => {
        const key = "59efbd007bb3959e479a32a2bbecdd52";
        const link = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=50&appid=${key}`;
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
