import { useRouter } from "next/router";
import { useContext } from "react";
import { Context as MovieContext } from "../../../context/movieDataContext";

export default function Movie() {
    const router = useRouter();
    const { movie } = router.query;
    // const { state } = useContext(MovieContext);

    return <div>{movie}</div>;
}
