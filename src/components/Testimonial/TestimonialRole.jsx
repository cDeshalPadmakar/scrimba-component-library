import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialRole({children}) {
    const {isImg} = React.useContext(TestimonialContext)
    return (
        <div className={`testimonial-role ${isImg && "img-testimonial-role"}`}>
            {children}
        </div>
    )
}