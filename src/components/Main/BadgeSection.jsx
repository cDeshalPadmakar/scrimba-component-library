// import React from "react"
import Badge from "../Badge/Badge"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BadgeSection() {
    const codeString = `
Props
shape = "square" (default), "pill"
theme = "red" (default), "yellow", "green", "pink", "purple", "indigo", "blue", "gray"
you can pass addition props supported by html <div> element such as onClick, onDoubleClick ...
eg. 👇

<Badge theme="indigo">Hello World</Badge>
<Badge shape="pill">Hello World</Badge>
<Badge theme="green" shape="pill">Hello World</Badge>

`

    const styles = {fontSize: "14px"}
    return (
        <div className="badge-section section">
            <div className="container">
                <h2>Badge Component</h2>
                <section className="demo">
                    <Badge>Badge</Badge>
                    <Badge theme="yellow">Badge</Badge>
                    <Badge theme="green">Badge</Badge>
                    <Badge theme="pink">Badge</Badge>
                    <Badge theme="purple">Badge</Badge>
                    <Badge theme="indigo">Badge</Badge>
                    <Badge theme="blue">Badge</Badge>
                    <Badge theme="gray">Badge</Badge>
                    <Badge shape="pill" theme="red">Badge</Badge>
                    <Badge theme="yellow" shape="pill">Badge</Badge>
                    <Badge theme="green" shape="pill">Badge</Badge>
                    <Badge theme="pink" shape="pill">Badge</Badge>
                    <Badge theme="purple" shape="pill">Badge</Badge>
                    <Badge theme="indigo" shape="pill">Badge</Badge>
                    <Badge theme="blue" shape="pill">Badge</Badge>
                    <Badge theme="gray" shape="pill">Badge</Badge>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                    <div className="demo">
                        <Badge theme="indigo">Hello World</Badge>
                        <Badge shape="pill">Hello World</Badge>
                        <Badge theme="green" shape="pill">Hello World</Badge>
                    </div>
                </section>
                <section  className="demo-code">
                
                </section>
            </div>
        </div>
    )
}