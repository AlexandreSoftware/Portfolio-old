import { motion } from "framer-motion"
import { useContext, useRef, useState } from "react"
import OldThemeContext from "../../../utils/OldThemeContext"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import BackgroundChangeBall from "../Background/BackgroundChangeBall"
import Style from "./Styles/ColorCircle.module.css"
interface ColorProps{
    Color:string
    Theme:Theme,
    id :string
}
export default function Color(props:ColorProps) {
    let [ishovered,setIsHovered] =  useState(false)
    let [isReverse,setIsReverse] =  useState(false)
    let ishoveredref =  useRef(false)
    let [themecontext,SetThemeContext] = useContext(ThemeContext)
    let [oldThemeContext,SetOldThemeContext] = useContext(OldThemeContext)
    let clicked = useRef(false);
    return(
        <>
            <motion.div
            id={props.id}
            whileHover="hover"
            variants={{
                    hover:{
                        scale:1.3
                    }
                }
            }
            className={Style.Color}
            style={{
                position:ishovered? "relative" : "inherit",
                zIndex:ishovered? 40:0,
                backgroundColor:props.Color
            }}
            onMouseEnter={()=>{
                setIsReverse(false)
                SetOldThemeContext(themecontext)
                setIsHovered(true)
                setTimeout(()=>{
                    if(ishoveredref.current||clicked.current){
                        SetThemeContext(props.Theme)
                    }
                },850)
                ishoveredref.current = true
            }}
            onMouseLeave={()=>{
                if(!clicked.current){
                    SetThemeContext(oldThemeContext)
                    setIsHovered(false)
                    ishoveredref.current = false

                }
                else{
                    setTimeout(() => {
                        setIsHovered(false)    

                    }, 1000);
                    clicked.current =false
                    SetOldThemeContext(props.Theme)
                }

            }}
            onClick={
                ()=>{
                    clicked.current=true
                }
            }
            />
            {ishovered &&
            <div>
                <BackgroundChangeBall reverse={false} element={document.getElementById(props.id)!} colorToChange={props.Theme}/>
            </div>}
            {(!ishovered && isReverse) &&
             <div>
                 <BackgroundChangeBall reverse={true} element={document.getElementById(props.id)!} colorToChange={props.Theme}/>
             </div>   
            }
        </>
    )

}