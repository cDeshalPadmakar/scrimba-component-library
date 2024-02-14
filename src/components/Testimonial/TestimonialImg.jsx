import React from "react"
import { TestimonialContext } from "./Testimonial"
import gridImg from "./image/gridImg.png"

export default function TestimonialImg() {
    const {img} = React.useContext(TestimonialContext)
    
    return img ? 
        <img src={img} alt="author-picture" className="testimonial-user-img" />  : 
        <img 
            src={gridImg} 
            className="testimonial-grid-img"
        />
}