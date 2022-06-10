import { useContext, useState, useEffect } from "react";
import GetIcon from "../Components/GetIcon";
import IndividualSkill from "../Components/Skills/IndividualSkill";
import SkillsContainer from "../Components/Skills/SkillsContainer";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/Skills.module.css"
export default function Skills() {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(Theme.Base))
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        SetIcon(GetIcon(context))
        setIsSSR(false)
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
    return (
        <div className={Style.Skills}>
            {!isSSR && icon}
            <div className={Style.SkillsContainer}>
                <SkillsContainer>
                    <IndividualSkill Name="C#" Level={4} />
                    <IndividualSkill Name="React" Level={5} />
                    <IndividualSkill Name="TypeScript" Level={2} />
                    <IndividualSkill Name="Javscript" Level={3} />
                    <IndividualSkill Name="Asp.net" Level={4} />
                    <IndividualSkill Name="NEXTJS" Level={1} />
                </SkillsContainer>
            </div>
        </div>
    )
}