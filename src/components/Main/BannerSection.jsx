import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Banner from "../Banner/index"

export default function BannerSection() {
    const codeString = `
Props
theme = "success" (default), "warning", "error", "neutral"
customStyle = { CSS style goes here } (optional)
customIcon = <react icon /> (optional)
you can pass addition props supported by html <div> element such as onClick, onDoubleClick ...
eg. 👇

<Banner>
    <Banner.Title>BANNER TITLE GOES HERE</Banner.Title>
    <Banner.Text>BANNER TEXT GOES HERE</Banner.Text>
</Banner>

<Banner theme="warning">
    <Banner.Title>BANNER TITLE GOES HERE</Banner.Title>
    <Banner.Text>BANNER TEXT GOES HERE</Banner.Text>
</Banner>

`
    return (
        <div className="banner-section section">
            <div className="container">
                <h2>Banner Component</h2>
                <section className="demo">
                    <Banner>
                        <Banner.Title>Congratulations!</Banner.Title>
                        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
                    </Banner>
                    <Banner theme="warning">
                        <Banner.Title>Attention</Banner.Title>
                        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
                    </Banner>
                    <Banner theme="error">
                        <Banner.Title>There is a problem with your application</Banner.Title>
                        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
                    </Banner>
                    <Banner theme="neutral">
                        <Banner.Title>Update available</Banner.Title>
                        <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
                    </Banner>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </section>
                <section className="demo">
                    <Banner>
                        <Banner.Title>BANNER TITLE GOES HERE</Banner.Title>
                        <Banner.Text>BANNER TEXT GOES HERE</Banner.Text>
                    </Banner>
                    <Banner theme="warning">
                        <Banner.Title>BANNER TITLE GOES HERE</Banner.Title>
                        <Banner.Text>BANNER TEXT GOES HERE</Banner.Text>
                    </Banner>
                </section>
            </div>
        </div>
    )
}