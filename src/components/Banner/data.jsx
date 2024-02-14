import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationTriangle } from "react-icons/fa"
import { FaTimesCircle } from "react-icons/fa"
import { FaInfoCircle } from "react-icons/fa"

const data = {
    success: {
        icon: <FaCheckCircle />,
        titleColor: "rgb(6, 95, 70)",
        textColor: "rgb(4, 120, 87)",
        iconColor: "rgb(52, 211, 153)",
        backgroundColor: "rgb(236, 253, 245)"
    },
    warning: {
        icon: <FaExclamationTriangle />,
        titleColor: "rgb(146, 64, 14)",
        textColor: "rgb(180, 83, 9)",
        iconColor: "rgb(251, 191, 36)",
        backgroundColor: "rgb(255, 251, 235)"
    },
    error: {
        icon: <FaTimesCircle />,
        titleColor: "rgb(146, 64, 14)",
        textColor: "rgb(180, 83, 9)",
        iconColor: "rgb(248, 113, 113)",
        backgroundColor: "rgb(254, 242, 242)"
    },
    neutral: {
        icon: <FaInfoCircle />,
        titleColor: "rgb(30, 64, 175)",
        textColor: "rgb(28, 81, 185)",
        iconColor: "rgb(96, 165, 250)",
        backgroundColor: "rgb(239, 246, 255)"
    }
}

export default data