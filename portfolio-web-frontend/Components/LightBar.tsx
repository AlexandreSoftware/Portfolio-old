import { motion } from "framer-motion"
import { useContext } from "react"
import ThemeContext from "../utils/ThemeContext"
import Style from "./Styles/LightBar.module.css"
interface LightBarProps{
    side:"Left"| "Right"
}
export default function LightBar(props:LightBarProps) {
    let [context] =useContext(ThemeContext)

    return(
        <motion.div
        key={context}
        initial = "backgroundInitial"
        animate = "backgroundAnimate"
        variants={
            {
                backgroundInitial:{
                    opacity:0,
                },
                backgroundAnimate:{
                    opacity:"100%",
                    transition:{
                        duration:1
                    }
                }
            }
        }
        className={`${Style.LightBar} ${Style[`LightBar-${props.side}`]}`}>

        </motion.div>
    )
}