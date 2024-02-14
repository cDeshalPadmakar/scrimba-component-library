import React from "react"

export default function CardText({children, color, style, ...rest}) {
    const styles = {...style, color}
    return (
        <div className="card-text" {...rest} style={styles}>
            {children}
        </div>
    )
}