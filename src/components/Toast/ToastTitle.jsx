import React from "react"
import { ToastContext } from "./Toast"

export default function ToastTitle({children}) {
    const styles = React.useContext(ToastContext)
    return (
        <div className="toast-title" style={styles.toastTitle}>
            {children}
        </div>
    )
}