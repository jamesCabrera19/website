import { useContext } from "react";
import Link from "next/link";
import { Context as ColorContext } from "../../../context/colorScheme";

export default function MusicApp() {
    const { state } = useContext(ColorContext);
    console.log("from nested route: ", state);
    return (
        <div>
            <h1> nested music app</h1>
        </div>
    );
}
