import React from "react"
import { BannerContext } from "./Banner"

export default function BannerText({children}) {
    const {textColor} = React.useContext(BannerContext)
    const styles = {color: textColor}
    
    return (
        <div className="banner-text" style={styles}>
            {children}
        </div>
    )
}