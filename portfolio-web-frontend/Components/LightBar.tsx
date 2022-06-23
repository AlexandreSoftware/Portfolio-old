import { motion } from "framer-motion"
import Style from "./Styles/LightBar.module.css"
interface LightBarProps{
    side:"Left"| "Right"
}
export default function LightBar(props:LightBarProps) {
    return(
        <motion.div
        className={`${Style.LightBar} ${Style[`LightBar-${props.side}`]}`}>

        </motion.div>
    )
}