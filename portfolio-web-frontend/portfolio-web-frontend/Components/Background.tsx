import { useContext } from "react";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/Background.module.css"
export default function Background() {
    let [context] =useContext(ThemeContext)
    return <div className={`${Style["Background"]} ${Style[`Background-${Theme[context]}`]}` }>
        
    </div>
}