import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialQuote({children}) {
    const {isImg} = React.useContext(TestimonialContext)
    
    return (
        <div className="testimonial-quote">
            <RiDoubleQuotesL 
                className={`testimonial-quote-svg ${isImg && "img-testimonial-quote-svg"}`}
            />
            {children}
        </div>
    )
}