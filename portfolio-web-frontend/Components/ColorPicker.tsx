import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import DropDownMenu from "./DropDownMenu"
import Style from "./Styles/ColorPicker.module.css"
interface ColorPickerProps{
    closeStateDispatch : Dispatch<SetStateAction<boolean>>
    closeState : boolean;
}

export default function ColorPicker(props:ColorPickerProps) {
    return (
        <>
            <div className={Style.ColorPicker} onClick={()=>{props.closeStateDispatch(!props.closeState)}}>
                <FontAwesomeIcon icon={faPalette} />
            </div>
        </>

    )
}