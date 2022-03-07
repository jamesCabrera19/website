import { useState } from "react";

export default () => {
    const [value, setValue] = useState({});

    const valueSetter = (val) =>
        setValue((prev) => ({ ...prev, movie: value }));

    return [value, valueSetter];
};
