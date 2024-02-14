import React from "react"

export default function TooltipText({children, style}) {
    return (
        <div className="tooltip-text" style={style}>
            {children}
        </div>
    )
}