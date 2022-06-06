import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Styles from "./Styles/Skillcard.module.css"
interface SkillCardProps{
    icon :IconDefinition,
    children: JSX.Element,
    sizex : number,
    sizey : number
}

export default function SkillCard(props:SkillCardProps) {
    const [context,SetContext] =useContext(ThemeContext)
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        setIsSSR(false)
    },[])
    return (<div className={`${Styles.SkillCard} ${isSSR?"":Styles[`SkillCard-${Theme[context]}`]}`} style={{width:props.sizex+"vw",height:props.sizey+"vh"}}>
        <div className={Styles.SkillCardIcon}>
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <p>
            {props.children}
        </p>
    </div>)
}