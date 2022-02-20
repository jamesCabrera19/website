import { useState } from "react";

export default () => {
    const [movie, setMovie] = useState({});

    return [movie, setMovie];
};
