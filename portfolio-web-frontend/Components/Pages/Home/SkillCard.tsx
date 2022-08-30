import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import GetIcon from "../../Common/GetIcon";
import LittleBar from "../../Common/LittleBar";
import Style from "./Styles/Skillcard.module.css"
interface SkillCardProps{
    icon :IconDefinition,
    children: any,
    Title : String,
}

export default function SkillCard(props:SkillCardProps) {
    const [context,SetContext] =useContext(ThemeContext)
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        setIsSSR(false)
    },[])
    return (
    <motion.div
    whileHover="hover"
    variants={{
        hover:{
            scale:1.1
        }
    }}
    className={`${Style.SkillCard} ${isSSR?"":Style[`SkillCard-${Theme[context]}`]}`}>
        <div className={Style.SkillCardIcon + ` ${isSSR?"":Style[`SkillCardIcon-${Theme[context]}`]}`} style={{backgroundImage:"url("+GetIcon(context,true)+")"}}   >
            <FontAwesomeIcon icon={props.icon} width={100} height={100} /> 
        </div>
        <div className={Style.SkillcardContent}>
            <h2>{props.Title}</h2>
            <div className={Style.LittleBar}>
                <LittleBar/>
            </div>
            <p>
                {props.children}
            </p>
        </div>
    </motion.div>)
}