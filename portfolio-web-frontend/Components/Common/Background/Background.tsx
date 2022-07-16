import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import Style from "./Styles/Background.module.css"
export default function Background() {
    let [context] =useContext(ThemeContext)
    return <motion.div
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
                    duration:0.5
                }
            }
        }
    }
    className={`${Style["Background"]} ${Style[`Background-${Theme[context]}`]}` }/>
}