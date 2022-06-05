import { useContext } from "react";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import "./Styles/Background.css"
export default function Background() {
    let [context] =useContext(ThemeContext)
    return <div className={`Background Background-${Theme[context]}`}>
        
    </div>
}