import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialLogo({children}) {
    const {isImg} = React.useContext(TestimonialContext)
    return (
        <div className={`testimonial-logo ${isImg && "img-testimonial-logo"}`}>
            {children}
        </div>
    )
}