import { motion } from "framer-motion"
import { useContext, useRef, useState } from "react"
import OldThemeContext from "../../../utils/OldThemeContext"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import BackgroundChangeBall from "../Background/BackgroundChangeBall"
import Style from "./Styles/ColorCircle.module.css"
interface SimpleColorProps{
    Color:string
    Theme:Theme,
    id :string
}
export default function SimpleColorCircle(props:SimpleColorProps) {
    let [ishovered,setIsHovered] =  useState(false)
    let [isReverse,setIsReverse] =  useState(false)
    let ishoveredref =  useRef(false)
    let [themecontext,SetThemeContext] = useContext(ThemeContext)
    let [oldThemeContext,SetOldThemeContext] = useContext(OldThemeContext)
    let clicked = useRef(false);
    return(
        // <BackgroundChangeBall reverse={false} colorToChange={props.Theme}/>
        <div></div>
    )

}