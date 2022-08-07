import { Button, color, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { faArrowDown, faChevronDown, faGlobe, faLanguage, faPalette, faSignLanguage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction, useContext } from "react"
import LanguageContext, { Language } from "../../../utils/LanguageContext"
import Style from "./Styles/LanguagePickerButton.module.css"
interface LanguagePickerButtonProps{
    closeStateDispatch : Dispatch<SetStateAction<boolean>>
    closeState : boolean;
}
export default function LanguagePickerButton(props:LanguagePickerButtonProps) {
    const [,SetLanguageContext] = useContext(LanguageContext)
    return (
        <Menu>
            <MenuButton colorScheme="blackAlpha" as={Button} >
                <FontAwesomeIcon icon={faGlobe} />
            </MenuButton>
            <MenuList backgroundColor={"var(--chakra-colors-blackAlpha-700)"} border="1px solid black" flex={"0.5"}>
                <MenuItem
                onClick={()=>{
                    SetLanguageContext(Language.EN_US)
                }}
                _focus={{
                    background:"var(--chakra-colors-whiteAlpha-300)",
                }}
                _active={{
                    background:"var(--chakra-colors-whiteAlpha-500)"
                }}
                >English</MenuItem>
                <MenuItem _focus={{
                    background:"var(--chakra-colors-whiteAlpha-300)",
                }}
                _active={{
                    background:"var(--chakra-colors-whiteAlpha-500)"
                }}
                onClick={()=>{
                    SetLanguageContext(Language.PT_BR)
                }}
                >Portugues</MenuItem>
            </MenuList>
        </Menu>
            
        

    )
}