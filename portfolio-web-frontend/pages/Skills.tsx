import { useContext, useState, useEffect } from "react";
import BackgroundWLetters from "../Components/Common/Background/BackgroundWLetters";
import GetIcon from "../Components/Common/GetIcon";
import IndividualSkill from "../Components/Pages/Skills/IndividualSkill";
import SkillsContainer from "../Components/Pages/Skills/SkillsContainer";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/Skills.module.css"
export default function Skills() {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(Theme.Base,false))
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        SetIcon(GetIcon(context,false))
        setIsSSR(false)
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context,false))
    },[context])
    return (
        <div className={Style.Skills}>
            {!isSSR &&<BackgroundWLetters/>}
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