import { motion } from "framer-motion"
import { useContext, useRef, useState } from "react"
import OldThemeContext from "../../../utils/OldThemeContext"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import BackgroundChangeBall from "../Background/BackgroundChangeBall"
import Style from "./Styles/ColorCircle.module.css"
interface SimpleColorProps{
    Color:string
}
export default function SimpleColorCircle(props:SimpleColorProps) {
    return(
        <div className={Style.Color} style={{backgroundColor:props.Color}}>
        </div>
    )

}