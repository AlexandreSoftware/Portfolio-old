import { reverse } from "dns";
import { motion, useAnimation } from "framer-motion";
import { exit } from "process";
import { useContext, useEffect, useState } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import Style from "./Styles/BackgroundChangeBall.module.css"
import htmltocanvas from "html2canvas"
interface BackgroundChangeBallProps{
    element : Element,
    colorToChange : Theme,
    reverse:boolean
    //children:any
}
export default function BackgroundChangeBall(props:BackgroundChangeBallProps) {
    
    let circleposition =[0,0];
    let bodyRect = document.body.getBoundingClientRect(),
        elemRect = props.element.getBoundingClientRect(),
        topoffset   = elemRect.top - bodyRect.top,
        leftoffset   = elemRect.left - bodyRect.left;
    circleposition =[topoffset,leftoffset];
    useEffect(()=>{
    },[])
    return (<motion.div
        initial="backgroundBallInitial"
        animate="backgroundBallAnimate"
        variants={{
            backgroundBallInitial:{
                
            },
            backgroundBallAnimate:{
                opacity:props.reverse?100: 0,
                transition:{
                    delay:1,
                    duration:1.1
                },
                transitionEnd: { display: "none" }
            },
        }}
        className={Style.BackgroundChangeBall}
        >
        { circleposition[0] != 0 &&
            (<motion.div 
                    className={`${Style.OverlayBall}  ${`Background-${Theme[props.colorToChange]}`}`}
                    initial="InitialBall"
                    animate="AnimateBall"
                    variants={{
                        InitialBall:{
                            scale:props.reverse?100 :0,
                            top:circleposition[0],
                            left:circleposition[1]
                        },
                        AnimateBall:{
                            scale:props.reverse?0:100 ,
                            transition:{
                                duration:1
                            }
                        }}}/>)}
    </motion.div>)
}