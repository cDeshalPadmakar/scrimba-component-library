import React from "react"
import { ToastContext } from "./Toast"

export default function ToastText({children}) {
    const styles = React.useContext(ToastContext)
    return (
        <div className="toast-text" style={styles.toastText}>
            {children}
        </div>
    )
}