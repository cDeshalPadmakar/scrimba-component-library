import React from "react"
import {data} from "./data"

const ToastContext = React.createContext()
export { ToastContext }

export default function Toast({children, theme = "success", text}) {
    const themeData = data[theme]
    const styles = {
        toast: { backgroundColor: themeData.backgroundColor},
        toastIcon: {color: themeData.iconColor},
        toastTitle: {color: themeData.titleColor},
        toastText: {color: themeData.textColor}
    }
    
    const [isShow, setIsShow] = React.useState(false)
    
    function toggleIsShow() {
        setIsShow(true)
        setTimeout( () => { setIsShow(false) }, 3000);
    }
    
    return (
        <ToastContext.Provider value={styles}>
            <div>
                <button onClick={toggleIsShow}>{text}</button>
            </div>
            <div className={`toast ${isShow ? "show-toast" : ""}`} style={styles.toast}>
                <div style={styles.toastIcon}>
                    {themeData.icon}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </ToastContext.Provider>
    )
}