import { click } from "@testing-library/user-event/dist/click"
import { useContext, useState } from "react"
import OldThemeContext from "../utils/OldThemeContext"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import "./Styles/ColorSquare.css"
interface ColorProps{
    Color:string
    Theme:Theme
}
export default function Color(props:ColorProps) {
    let [themecontext,SetThemeContext] = useContext(ThemeContext)
    let [oldThemeContext,SetOldThemeContext] = useContext(OldThemeContext)
    let clicked = false;
    return(
        <div className="Color" 
        onMouseEnter={()=>{
            SetOldThemeContext(themecontext)
            SetThemeContext(props.Theme)
        }}
        onMouseLeave={()=>{
            console.log(themecontext)
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