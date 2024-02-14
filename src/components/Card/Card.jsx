import React from "react"

export default function Card({children, backgroundColor, style, ...rest}) {
    const styles = {...style, backgroundColor}
    return (
        <div className="card" {...rest} style={styles}>
            {children}
        </div>
    )
}