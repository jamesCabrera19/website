import { useState } from "react";

export default () => {
    const [value, setValue] = useState(10);

    const valueSetter = (val) => setValue(val);

    return [value, valueSetter];
};
