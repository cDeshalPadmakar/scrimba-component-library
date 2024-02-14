import React from "react"

export default function CardTitle({children, color, style, ...rest}) {
    const styles = {...style, color}
    return (
        <div className="card-title" {...rest} style={styles}>
            {children}
        </div>
    )
}