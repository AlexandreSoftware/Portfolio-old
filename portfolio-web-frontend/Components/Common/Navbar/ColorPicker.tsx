import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import { Theme } from "../../../utils/ThemeContext"
import ColorCircle from "./ColorCircle"
import DropDownMenu from "./DropDownMenu"
import Style from "./Styles/ColorPicker.module.css"
export default function ColorPicker() {
    return (
        <ul className={Style.DropDownMenu}>
            <li><ColorCircle Color="#171A21" Theme={Theme.Base} id="ColorBaseButton"/></li>
            <li><ColorCircle Color="#3C1361" Theme={Theme.HighTechPurple} id="ColorPurpleButton"/></li>
            <li><ColorCircle Color="#FF0000" Theme={Theme.HighTechRed} id="ColorRedButton"/></li>
            <li><ColorCircle Color="#229867" Theme={Theme.KissLand} id="ColorKissLandButton"/></li>
        </ul>

    )
}