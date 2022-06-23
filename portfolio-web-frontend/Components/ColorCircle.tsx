import { motion } from "framer-motion"
import { useContext, useState } from "react"
import OldThemeContext from "../utils/OldThemeContext"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import Style from "./Styles/ColorCircle.module.css"
interface ColorProps{
    Color:string
    Theme:Theme
}
export default function Color(props:ColorProps) {
    let [themecontext,SetThemeContext] = useContext(ThemeContext)
    let [oldThemeContext,SetOldThemeContext] = useContext(OldThemeContext)
    let clicked = false;
    return(
        <motion.div
        whileHover="hover"
        variants={{
                hover:{
                    scale:1.3
                }
            }
        }
        className={Style.Color} 
        onMouseEnter={()=>{
            SetOldThemeContext(themecontext)
            SetThemeContext(props.Theme)
        }}
        onMouseLeave={()=>{
            (themecontext)
            if(!clicked){
                SetThemeContext(oldThemeContext)
            }
            else{
                clicked = false
                SetOldThemeContext(props.Theme)
            }
        }}
        onClick={
            ()=>{
                clicked=true
            }
        }
        style={{backgroundColor:props.Color}}/>

    )

}