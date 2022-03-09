import { BiDownload } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
import _styles from "../../styles/movieApp.module.css";
export default function RegularBtn({ callback, type }) {
    return (
        <div
            style={{
                width: 60,
                height: 40,
                borderRadius: 4,
                border: "1px solid rgb(230, 89, 137)", // same as theme.background
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={() => callback()}
            className={_styles.iconButton}
        >
            {type === "download" ? (
                <BiDownload size={30} color="rgb(230, 89, 137)" />
            ) : (
                <MdIosShare size={30} color="rgb(230, 89, 137)" />
            )}
        </div>
    );
}
