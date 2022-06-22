import Style from "./Styles/DropDownMenu.module.css"
import ColorCircle from "./ColorCircle"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import { useContext } from "react"
export default function DropDownMenu() {
    const [context,SetContext] =useContext(ThemeContext)
    return(
        <ul className={`${Style.DropDownMenu} ${Style[`DropDownMenu-${Theme[context]}`]}`}>
            <li><ColorCircle Color="#171A21" Theme={Theme.Base}/></li>
            <li><ColorCircle Color="#3C1361" Theme={Theme.HighTechPurple}/></li>
            <li><ColorCircle Color="#FF0000" Theme={Theme.HighTechRed}/></li>
            <li><ColorCircle Color="#229867" Theme={Theme.KissLand}/></li>
        </ul>
    )
}