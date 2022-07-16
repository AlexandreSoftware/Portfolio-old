import { motion } from "framer-motion"
import { useContext } from "react"
import ThemeContext from "../../../utils/ThemeContext"
import Style from "./Styles/AlignedText.module.css"
export default function AlignedText(props:any) {
    const [context,SetContext] =useContext(ThemeContext)

    return(
        <span className="aligned-text">
            {props.children}
        </span>
    )
}