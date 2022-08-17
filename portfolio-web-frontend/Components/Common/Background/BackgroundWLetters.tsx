import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import Background from "./Background";
import Style from "./Styles/BackgroundWLetters.module.css"
export default function BackgroundWLetters() {
    let [context] =useContext(ThemeContext);
    if(context != Theme.Base || context as Theme != Theme.HighTechPurple){

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
                        duration:1
                    }
                }
            }
        }
        className={`${Style["Background"]} ${Style[`Background-${Theme[context]}`]}` }/>
    }
    else{
        return (<Background></Background>)
    }
}