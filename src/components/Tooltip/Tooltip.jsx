import React from "react"
import TooltipTitle from "./TooltipTitle"
import TooltipText from "./TooltipText"
import { FaInbox } from "react-icons/fa"
import { data } from "./data"


export default function Tooltip({children, title, text, theme = "dark"}) {
    
    // getting theme colors
    const themeData = data.filter( item => item.theme === theme )[0]
    const styles = {
        tooltip: {backgroundColor: themeData.backgroundColor},
        tooltipArrow: {
            borderColor: `${themeData.backgroundColor} transparent transparent transparent`
        },
        tooltipIcon: {color: themeData.iconColor},
        tooltipTitle: {color: themeData.titleColor},
        tooltipText: {color: themeData.textColor}
    }
    
    // shifting tooltip if overflows outside the window
    const tooltipEl = React.useRef(null)
    const tooltipArrowEl = React.useRef(null)
    const tooltipContentEl = React.useRef(null)
    
    React.useEffect( () => {
        tooltipContentEl.current.addEventListener("mouseover", () => {
            tooltipEl.current.style.left = "0px"
            tooltipArrowEl.current.style.left = "40px"
            if(tooltipEl.current.getBoundingClientRect().left + 260 > window.innerWidth || window.innerWidth < 600) {
                tooltipEl.current.style.left = "-150px"
                tooltipArrowEl.current.style.left = "200px"
            }
            console.log(window.innerWidth)
            console.log(tooltipEl.current.getBoundingClientRect())
        })
    })
    
    return (
        <div className="tooltip-container">
                <div className="tooltip-content" ref={tooltipContentEl}>
                &nbsp;{children}&nbsp;
                    <div className="tooltip" style={styles.tooltip} ref={tooltipEl}>
                        <div className="tooltip-arrow" style={styles.tooltipArrow} ref={tooltipArrowEl}></div>
                        <div className="tooltip-icon" style={styles.tooltipIcon}>
                            <FaInbox />
                        </div>
                        <div>
                            <TooltipTitle style={styles.tooltipTitle}>{title}</TooltipTitle>
                            <TooltipText style={styles.tooltipText}>{text}</TooltipText>
                        </div>
                    </div>
                </div>
            &nbsp;
        </div>
    )
}