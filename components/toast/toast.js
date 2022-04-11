import { useCallback, useEffect } from "react";
import _styles_ from "./Toast.module.css";

export default function Toast({ toastList, position, setList }) {
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
}
