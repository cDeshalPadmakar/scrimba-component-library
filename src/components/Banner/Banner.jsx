import React from "react"
import data from "./data"
import classNames from "classnames"

const BannerContext = React.createContext()

export default function Banner({children, theme = "success", className, customStyle, customIcon, ...rest}) {
    const {icon, iconColor, backgroundColor} = data[theme]
    const styles = customStyle ? {...customStyle, backgroundColor} : {backgroundColor}
    const classes = classNames("banner", className)
    const iconStyles = {color: iconColor}
    
    return (
        <BannerContext.Provider value={ {...data[theme]} }>
            <div className={classes} style={styles} {...rest}>
                <div style={iconStyles}>
                    {customIcon ? customIcon : icon}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
    )
    
}

export { BannerContext }