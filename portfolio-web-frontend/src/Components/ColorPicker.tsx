import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DropDownMenu from "./DropDownMenu"
import "./Styles/ColorPicker.css"
export default function ColorPicker() {
    return (
        <>
            <div className="ColorPicker">
                <FontAwesomeIcon icon={faPalette} />
                
            </div>
        </>

    )
}