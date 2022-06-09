import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import GetIcon from "../Components/GetIcon"
import ProjectCards from "../Components/Home/ProjectCards"
import ProjectPricingCards from "../Components/Home/ProjectPricingCards"
import SixSkillCards from "../Components/Home/SixSkillCards"
import StyledButton from "../Components/StyledButton"
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
            <div className={Style.ProjectsContainer}> 
                <h2>Projects</h2>
                <ProjectCards/>
            </div>
            <div className={Style.ProjectpricingCards}>
                <ProjectPricingCards/>
            </div>
            <StyledButton link="xandrf@xandrfdev.com" whereTo="external" width={18} height={8}>
                Contact Me
            </StyledButton>
        </div>      
    </div>
}