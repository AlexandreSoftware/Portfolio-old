import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/BackgroundWLetters.module.css"
export default function BackgroundWLetters() {
    let [context] =useContext(ThemeContext)
    return <motion.div 
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
    className={`${Style["Background"]} ${Style[`Background-${Theme[context]}`]}` }/>
}