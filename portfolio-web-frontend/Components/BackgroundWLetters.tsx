import { useContext } from "react";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/BackgroundWLetters.module.css"
export default function BackgroundWLetters() {
    let [context] =useContext(ThemeContext)
    return <div className={`${Style["Background"]} ${Style[`Background-${Theme[context]}`]}` }/>
}