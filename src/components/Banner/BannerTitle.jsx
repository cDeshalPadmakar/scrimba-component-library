import React from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle({children}) {
    const {titleColor} = React.useContext(BannerContext)
    const styles = {color: titleColor}
    
    return (
        <div className="banner-title" style={styles}>
            {children}
        </div>
    )
}