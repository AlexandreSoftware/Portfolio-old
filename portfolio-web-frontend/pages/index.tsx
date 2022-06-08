import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import GetIcon from "../Components/GetIcon"
import SixSkillCards from "../Components/SixSkillCards"
import SkillCard from "../Components/SkillCard"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import Style from "./Styles/Home.module.css"
export default function Home() {
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
    return <div>
        <div className={Style["Home-logo"]}>
            {!isSSR && icon}
            <h1>Welcome to my Portfolio</h1>
            {!isSSR && <p className={`${Style["Home-paragraph"]}   ${Style[`Home-paragraph-${Theme[context]}`]}`}>
                My name is 
                Carlos Alexandre Oliveira Junior
                I’m a .Net/Node Fullstack Developer
                Im currently working as a freelancer developer
                and i’m open to formal work
            </p>}
            <div className={Style.SixSkillCardsContainer}>
                <SixSkillCards/>
            </div>
            <h2>Projects</h2>
            <div> 
                
            </div>
        </div>      
    </div>
}