import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import GetIcon from "../../Common/GetIcon";
import LittleBar from "../../Common/LittleBar";
import Styles from "./Styles/Skillcard.module.css"
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
    className={`${Styles.SkillCard} ${isSSR?"":Styles[`SkillCard-${Theme[context]}`]}`}>
        <div className={Styles.SkillCardIcon + ` ${isSSR?"":Styles[`SkillCardIcon-${Theme[context]}`]}`} style={{backgroundImage:"url("+GetIcon(context,true)+")"}}   >
            <FontAwesomeIcon icon={props.icon} width={100} height={100} /> 
        </div>
        <h2>{props.Title}</h2>
        <LittleBar/>
        <p>
            {props.children}
        </p>
    </motion.div>)
}