import React from "react"
import { FaLaugh } from "react-icons/fa"

export default function CardIcon({children = <FaLaugh />, backgroundColor}) {
    const styles = backgroundColor ? {backgroundColor} : null
    return (
        <div className="card-icon-container" style={styles}>
            {children}
        </div>
    )
}