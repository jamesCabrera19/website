import { useContext, useState, useCallback, useEffect } from "react";
// import Link from "next/link";
// import { Context as ColorContext } from "../../context/colorScheme";
import _styles_ from "../../styles/Toast.module.css";

const Toast = ({ toastList, position, setList }) => {
    const deleteToast = useCallback(
        (id) => {
            const toastListItem = toastList.filter((e) => e.id !== id);
            setList(toastListItem);
        },
        [toastList, setList]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length) {
                deleteToast(toastList[0].id);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [toastList, deleteToast]);

    return (
        <div className={`${_styles_.container} ${_styles_[position]}`}>
            {toastList.map((toast, i) => (
                <div
                    key={i}
                    className={`${_styles_.notification} ${_styles_.toast} ${_styles_[position]}`}
                    style={{ backgroundColor: toast.backgroundColor }}
                >
                    <button onClick={() => deleteToast(toast.id)}>X</button>
                    <div>
                        <p className={_styles_.title}>{toast.title}</p>
                        <p className={_styles_.description}>
                            {toast.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// export default function MusicApp() {
//     const { state } = useContext(ColorContext);

//     return (
//         <div>
//             <h1>music app</h1>
//             <Link href={"/apps/musicapp/music"}>music nested link</Link>
//         </div>
//     );
// }

export default function MusicApp() {
    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = (type) => {
        switch (type) {
            case "success":
                toastProperties = {
                    id: list.length + 1,
                    title: "Success",
                    description: "This is a success toast component",
                    backgroundColor: "#5cb85c",
                };
                break;
            // case "danger":
            //     toastProperties = {
            //         id: list.length + 1,
            //         title: "Danger",
            //         description: "This is a danger toast component",
            //         backgroundColor: "#d9534f",
            //     };
            //     break;
            case "info":
                toastProperties = {
                    id: list.length + 1,
                    title: "Info",
                    description: "This is a info toast component",
                    backgroundColor: "#5bc0de",
                };
                break;
            // case "warning":
            //     toastProperties = {
            //         id: list.length + 1,
            //         title: "Warning",
            //         description: "This is a warning toast component",
            //         backgroundColor: "#f0ad4e",
            //     };
            //     break;
            default:
                toastProperties = [];
        }
        setList([...list, toastProperties]);
    };

    return (
        <div>
            <h1>React Toast Component</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Button handleClick={() => showToast("success")}>
                    Success
                </Button>
                {/* <Button handleClick={() => showToast("danger")}>Danger</Button> */}
                <Button handleClick={() => showToast("info")}>Info</Button>
                {/* <Button handleClick={() => showToast("warning")}>
                    Warning
                </Button> */}
            </div>
            <Toast toastList={list} position="buttom-right" setList={setList} />
        </div>
    );
}
