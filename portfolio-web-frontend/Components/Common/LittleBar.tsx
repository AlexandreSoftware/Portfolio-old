import { useContext } from "react";
import ThemeContext, { Theme } from "../../utils/ThemeContext";
import Style from "./Styles/LittleBar.module.css"
export default function LittleBar() {
    const [themeContext] =useContext(ThemeContext);
    return(
        <div className={`${Style.LittleBar} 
            ${Style[`LittleBar-${Theme[themeContext]}`]}`}>
        </div>
    )
}