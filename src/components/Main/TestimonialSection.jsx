import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Testimonial from "../Testimonial/index"
import defaultImg from "../Testimonial/image/person.png"
import unsplashImg from "../Testimonial/image/unsplashImg.jpg"
import { FaGrinStars } from "react-icons/fa"

export default function TestimonialSection() {
    const codeString =`

Props
In Testimonial
   * img = {img src goes here} (optional). Note that Testimonail component is overloaded. UI changes if img prop passed
   * backgroundColor = "specify color" (optional, defaults to light gray)
   * You can pass additional props supported by html <div> element
In Testimonial.Logo
   * If not passing img, you can place Testimonial.Logo (optional)

<Testimonial>
    <Testimonial.Logo>Logo goes here</Testimonial.Logo>
    <Testimonial.Quote>Quote goes here</Testimonial.Quote>
    <Testimonial.Author>Author name goes here</Testimonial.Author>
    <Testimonial.Role>Author role goes here</Testimonial.Role>
</Testimonial>

<Testimonial img={unsplashImg}>
    <Testimonial.Logo>Logo goes here 👋</Testimonial.Logo>
    <Testimonial.Quote>Testimonial quote goes here</Testimonial.Quote>
    <Testimonial.Author>Author name goes here</Testimonial.Author>
    <Testimonial.Role>Author role goes here</Testimonial.Role>
</Testimonial>

`
    return (
        <div className="testimonial-section section">
            <div className="container">
                <h2>Testimonial component</h2>
                <section >
                    <Testimonial>
                        <Testimonial.Logo>
                            <FaGrinStars style={{color: "rgb(46, 89, 243)", marginRight: "10px"}}/>
                            Work<span style={{color: "rgb(46, 89, 243)"}}>cation</span>
                        </Testimonial.Logo>
                        <Testimonial.Quote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </Testimonial.Quote>
                        <Testimonial.Author>May Andersons</Testimonial.Author>
                        <Testimonial.Role>Workcation, CTO</Testimonial.Role>
                    </Testimonial>
                    <Testimonial img={defaultImg}>
                        <Testimonial.Quote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </Testimonial.Quote>
                        <Testimonial.Author>May Andersons</Testimonial.Author>
                        <Testimonial.Role>Workcation, CTO</Testimonial.Role>
                    </Testimonial>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </section>
                <section className="demo">
                    <Testimonial>
                        <Testimonial.Logo>Logo goes here</Testimonial.Logo>
                        <Testimonial.Quote>Quote goes here</Testimonial.Quote>
                        <Testimonial.Author>Author name goes here</Testimonial.Author>
                        <Testimonial.Role>Author role goes here</Testimonial.Role>
                    </Testimonial>

                    <Testimonial img={unsplashImg}>
                        <Testimonial.Logo>Logo goes here 👋</Testimonial.Logo>
                        <Testimonial.Quote>Testimonial quote goes here</Testimonial.Quote>
                        <Testimonial.Author>Author name goes here</Testimonial.Author>
                        <Testimonial.Role>Author role goes here</Testimonial.Role>
                    </Testimonial>
                </section>
            </div>
        </div>
    )
}