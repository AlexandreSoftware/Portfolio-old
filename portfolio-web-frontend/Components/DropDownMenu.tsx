import Style from "./Styles/DropDownMenu.module.css"
import ColorSquare from "./ColorSquare"
import { Theme } from "../utils/ThemeContext"
export default function DropDownMenu() {
    return(
        <ul className={Style.DropDownMenu}>
            <li><ColorSquare Color="#171A21" Theme={Theme.Base}/></li>
            <li><ColorSquare Color="#3C1361" Theme={Theme.HighTechPurple}/></li>
            <li><ColorSquare Color="#FF0000" Theme={Theme.HighTechRed}/></li>
            <li><ColorSquare Color="#229867" Theme={Theme.KissLand}/></li>
        </ul>
    )
}