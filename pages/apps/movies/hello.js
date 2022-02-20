import { Context as MovieContext } from "../../../context/movieDataContext";
import { useContext } from "react";

export default function Hello() {
    const { state } = useContext(MovieContext);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}
