import { FaRegCheckCircle } from "react-icons/fa"
import { FaRegTimesCircle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";

export const data = {
    success: {
        icon: <FaRegCheckCircle />,
        backgroundColor: "rgb(236, 253, 245)",
        titleColor: "rgb(6, 95, 70)",
        textColor: "rgb(4, 120, 87)",
        iconColor: "rgb(52, 211, 153)",
        title: "Success",
        text: "Your work has been saved"
    },
    warning: {
        icon: <AiOutlineExclamationCircle />,
        backgroundColor: "rgb(255, 251, 235)",
        titleColor: "rgb(146, 64, 14)",
        textColor: "rgb(180, 83, 9)",
        iconColor: "rgb(251, 191, 36)",
        title: "Warning",
        text: "A network error was detected"
    },
    information: {
        icon: <IoInformationCircleOutline />,
        backgroundColor: "rgb(239, 246, 255)",
        titleColor: "rgb(30, 64, 175)",
        textColor: "rgb(28, 81, 185)",
        iconColor: "rgb(96, 165, 250)",
        title: "Information",
        text: "Please read updated information"
    },
    error: {
        icon: <FaRegTimesCircle />,
        backgroundColor: "rgb(254, 242, 242)",
        titleColor: "rgb(146, 64, 14)",
        textColor: "rgb(180, 83, 9)",
        iconColor: "rgb(248, 113, 113)",
        title: "Error",
        text: "Please re-save your work again"
    }
}