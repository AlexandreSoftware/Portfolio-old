import { reverse } from "dns";
import { motion, useAnimation } from "framer-motion";
import { exit } from "process";
import { useContext, useEffect, useState } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import Style from "./Styles/BackgroundChangeBall.module.css"
import htmltocanvas from "html2canvas"
interface BackgroundChangeBallProps{
    colorToChange : Theme,
}
export default function BackgroundChangeBall(props:BackgroundChangeBallProps) {
    return (
        <motion.div className={`${Style.OverlayBall}  ${`Background-${Theme[props.colorToChange]}`}`}/>
    )
}