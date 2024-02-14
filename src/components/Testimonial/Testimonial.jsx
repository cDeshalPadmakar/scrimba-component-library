import React from "react"
import TestimonialImg from "./TestimonialImg"

const TestimonialContext = React.createContext()
export { TestimonialContext }


export default function Testimonial({img, children, backgroundColor, style}) {
    const isImg = Boolean(img)
    const styles = {...style, backgroundColor}
    return (
        <TestimonialContext.Provider value={{img, isImg}}>
            <div className={`testimonial ${isImg && "img-testimonial"}`} style={styles}>
                <TestimonialImg />
                {children}
            </div>
        </TestimonialContext.Provider>
    )
}