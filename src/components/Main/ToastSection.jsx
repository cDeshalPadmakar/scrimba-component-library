import React from "react"
import Toast from "../Toast/index"
import {data} from "../Toast/data"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FaRegCheckCircle } from "react-icons/fa"

export default function ToastSction() {
    const codeString = `
Props
In Toast component
   * text = "button text goes here"
   * theme = "success" (default), "warning", "information", "error"
eg. 👇

<Toast text="Success 👍">
    <Toast.Title>Toast title goes here</Toast.Title>
    <Toast.Text>Toast text goes here</Toast.Text>
</Toast>

<Toast text="warning ⚠️" theme="warning">
    <Toast.Title>Toast title goes here</Toast.Title>
    <Toast.Text>Toast text goes here</Toast.Text>
</Toast>

<Toast text="information 🤷‍♂️" theme="information">
    <Toast.Title>Toast title goes here</Toast.Title>
    <Toast.Text>Toast text goes here</Toast.Text>
</Toast>
`

    function RenderToast({theme}) {
        const themeData = data[theme]
        const styles = {
            toast: {
                position: "static", 
                backgroundColor: themeData.backgroundColor, 
                transform: "none",
                transition: "none",
                width: "fit-content"
            },
            toastIcon: {
                color: themeData.iconColor
            },
            toastTitle: { color: themeData.titleColor },
            toastText: { color: themeData.textColor }
        }
        return (
            <div className="toast-demo" style={styles.toast}>
                <div>
                    <div style={styles.toastIcon}>{themeData.icon}</div>
                </div>
                <div>
                    <div className="toast-title" style={styles.toastTitle}>{themeData.title}</div>
                    <div className="toast-text" style={styles.toastText}>{themeData.text}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="toast-section section">
            <div className="container">
                <h2>Toast component</h2>
                <section className="demo">
                    <RenderToast theme="success" />
                    <RenderToast theme="warning" />
                    <RenderToast theme="information" />
                    <RenderToast theme="error" />
                </section>
                <section>
                <Toast text="Click me">
                    <Toast.Title>Success</Toast.Title>
                    <Toast.Text>Your work has been saved</Toast.Text>
                </Toast>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </section>
                <section className="demo">
                    <Toast text="Success 👍">
                        <Toast.Title>Toast title goes here</Toast.Title>
                        <Toast.Text>Toast text goes here</Toast.Text>
                    </Toast>

                    <Toast text="warning ⚠️" theme="warning">
                        <Toast.Title>Toast title goes here</Toast.Title>
                        <Toast.Text>Toast text goes here</Toast.Text>
                    </Toast>

                    <Toast text="information 🤷‍♂️" theme="information">
                        <Toast.Title>Toast title goes here</Toast.Title>
                        <Toast.Text>Toast text goes here</Toast.Text>
                    </Toast>
                </section>
            </div>
        </div>
    )
}