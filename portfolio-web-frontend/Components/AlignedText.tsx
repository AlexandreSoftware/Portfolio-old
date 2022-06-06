import { useContext } from "react"
import ThemeContext from "../utils/ThemeContext"
import Style from "./Styles/AlignedText.module.css"
export default function AlignedText(props:any) {
    const [context,SetContext] =useContext(ThemeContext)

    return(
        <text className="aligned-text">
            {props.children}
        </text>
    )
}