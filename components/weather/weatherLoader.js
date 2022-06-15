import ClipLoader from "react-spinners/ClipLoader";

export default function WeatherLoader(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 250,
            }}
        >
            <ClipLoader size={100} color={props.color} />
        </div>
    );
}
