import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useEffect } from "react";
import ThemeContext, { Theme } from "../../utils/ThemeContext";
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
    return (<div className={`${Styles.SkillCard} ${isSSR?"":Styles[`SkillCard-${Theme[context]}`]}`}>
        <div className={Styles.SkillCardIcon + ` ${isSSR?"":Styles[`SkillCardIcon-${Theme[context]}`]}`}>
            <FontAwesomeIcon icon={props.icon} />
        </div>
        <h2>{props.Title}</h2>
        <p>
            {props.children}
        </p>
    </div>)
}