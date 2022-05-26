import { click } from "@testing-library/user-event/dist/click"
import { useContext, useState } from "react"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import "./Styles/ColorSquare.css"
interface ColorProps{
    Color:string
    Theme:Theme
}
export default function Color(props:ColorProps) {
    let [context,SetContext] = useContext(ThemeContext)
    let clicked = false;
    let oldtheme = context;
    return(
        <div className="Color" 
        onMouseEnter={()=>{SetContext(props.Theme)}}
        onMouseLeave={()=>{
            console.log(clicked)
            if(!clicked){
                SetContext(oldtheme)
            }
            else{
                clicked = false
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