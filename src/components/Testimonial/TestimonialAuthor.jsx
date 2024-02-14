import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialAuthor({children}) {
    const {isImg} = React.useContext(TestimonialContext)
    
    return (
        <div className={`testimonial-author ${isImg && "img-testimonial-author"}`}>
            {children}
        </div>
    )
}