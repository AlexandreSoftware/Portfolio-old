import Style from "./Styles/DropDownMenu.module.css"
import ColorCircle from "./ColorCircle"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import { useContext } from "react"
import { motion } from "framer-motion"
export default function DropDownMenu() {
    const [context,SetContext] =useContext(ThemeContext)
    return(
        <motion.ul
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
            initial:{
                y:-100,
                
            },
            animate:{
                y:0,
                transition:{
                    ease:"backOut"
                }
            },
            exit:{
                y:-100,
                zIndex:-1,
                transition:{
                    ease:"backIn"
                }
            }
        }}
        className={`${Style.DropDownMenu} ${Style[`DropDownMenu-${Theme[context]}`]}`}>
            <li><ColorCircle Color="#171A21" Theme={Theme.Base}  id="ColorBaseButtonddm"/></li>
            <li><ColorCircle Color="#3C1361" Theme={Theme.HighTechPurple}  id="ColorPurpleButtonddm"/></li>
            <li><ColorCircle Color="#FF0000" Theme={Theme.HighTechRed}  id="ColorRedButtonddm"/></li>
            <li><ColorCircle Color="#229867" Theme={Theme.KissLand}  id="ColorKissLandButtonddm"/></li>
        </motion.ul>
    )
}