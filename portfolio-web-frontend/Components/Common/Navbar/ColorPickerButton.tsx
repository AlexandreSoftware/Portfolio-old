import { Button } from "@chakra-ui/react"
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import DropDownMenu from "./DropDownMenu"
import Style from "./Styles/ColorPickerButton.module.css"
interface ColorPickerButtonProps{
    closeStateDispatch : Dispatch<SetStateAction<boolean>>
    closeState : boolean;
}

export default function ColorPickerButton(props:ColorPickerButtonProps) {
    return (
        <>
            <Button colorScheme="blackAlpha" className={Style.ColorPicker} onClick={()=>{props.closeStateDispatch(!props.closeState)}} size="md">
                <FontAwesomeIcon icon={faPalette} />
            </Button>
        </>

    )
}