import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tooltip from "../Tooltip/Tooltip"

import { data } from "../Tooltip/data"
import { FaInbox } from "react-icons/fa"

export default function TooltipSection() {
    const codeString = `
Props
title = "tooltip title goes here"
text = "tooltip text goes here"
theme = "dark" (default), "light", "darkBlue", "lightBlue", "darkPink", "lightPink", "darkGreen", "lightGreen"
eg 👇

<p>
    Text ......
    <Tooltip 
        title="Tooltip title goes here"
        text="Tooltip text goes here"
    >
        Content to warp tooltip goes here. On hover, tooltip pops up.
    </Tooltip>
    ....... text.
</p>

<p>
    Tooltip
    <Tooltip 
        title="Tooltip title goes here"
        text="Tooltip text goes here"
        theme="lightPink"
    >
        lightPink theme
    </Tooltip>
</p>
`

    function RenderTooltip({theme}) {
        const themeData = data.filter( item => item.theme === theme )[0]
        const title = "Archive notes"
        const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
        const styles = {
            tooltip: {backgroundColor: themeData.backgroundColor},
            tooltipArrow: {
                borderColor: `${themeData.backgroundColor} transparent transparent transparent`
            },
            tooltipIcon: {color: themeData.iconColor},
            tooltipTitle: {color: themeData.titleColor},
            tooltipText: {color: themeData.textColor}
        }

        return (
            <div className="tooltip-contianer">
                <div className="tooltip-demo" style={styles.tooltip}>
                    <div className="tooltip-arrow" style={styles.tooltipArrow}></div>
                    <div className="tooltip-icon" style={styles.tooltipIcon}><FaInbox /></div>
                    <div>
                        <div className="tooltip-title" style={styles.tooltipTitle}>{title}</div>
                        <div className="tooltip-text" style={styles.tooltipTitle}>{text}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="tooltip-section section">
            <div className="container">
                <h2>Tooltip component</h2>
                <section className="demo">
                    <RenderTooltip theme="dark" />
                    <RenderTooltip theme="darkBlue" />
                    <RenderTooltip theme="darkPink" />
                    <RenderTooltip theme="darkGreen" />
                    <RenderTooltip theme="lightBlue" />
                    <RenderTooltip theme="lightPink" />
                    <RenderTooltip theme="lightGreen" />
                    <RenderTooltip theme="light" />
                </section>
                <section>
                <p>Lorem ipsum dolor sit amet, 
                <Tooltip 
                    title="Archive notes"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                    theme="lightGreen"
                >
                    Hover over me
                </Tooltip>
                elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit</p>
                </section>
                <section>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                    <p>
                        Text ......
                        <Tooltip 
                            title="Tooltip title goes here"
                            text="Tooltip text goes here"
                        >
                            Content to warp tooltip goes here. On hover, tooltip pops up.
                        </Tooltip>
                        ....... text.
                    </p>
                    <p>
                        Tooltip&nbsp;
                        <Tooltip 
                            title="Tooltip title goes here"
                            text="Tooltip text goes here"
                            theme="lightPink"
                        >
                            lightPink theme
                        </Tooltip>
                    </p>
                </section>
            </div>
        </div>
    )
}