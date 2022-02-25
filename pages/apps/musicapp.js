import { useContext } from "react";
import Link from "next/link";
import { Context as ColorContext } from "../../context/colorScheme";
export default function MusicApp() {
    const { state } = useContext(ColorContext);

    return (
        <div>
            <h1>music app</h1>
            <Link href={"/apps/musicapp/music"}>music nested link</Link>
        </div>
    );
}
