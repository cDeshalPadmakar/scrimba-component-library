import React from "react"

export default function TooltipTitle({children, style}) {
    return (
        <div className="tooltip-title" style={style}>
            {children}
        </div>
    )
}