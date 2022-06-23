import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import BackgroundWLetters from "../Components/BackgroundWLetters"
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
    return (
        <>
            {!isSSR &&<BackgroundWLetters/>}
            <motion.div
            initial="initial"
            animate="animate"
            variants={{
                initial:{
                    opacity:0
                },
                animate:{
                    opacity:1,
                    transition:{
                        delay:0.2
                    }
                }
            }}>
                <div className={`${Style["Home-logo"]} ${Style[`Home-${Theme[context]}`]}`}>
                <AnimatePresence exitBeforeEnter>
                    {!isSSR && icon}
                </AnimatePresence>
                <motion.h1
                    initial="headerInitial"
                    animate="headerAnimate"
                    variants={{
                        headerInitial:{
                            scale:0.3,
                            opacity:0
                        },
                        headerAnimate:{
                            scale:1,
                            opacity:1,
                            transition:{
                                delay:.3
                            }
                        }
                    }}
                >Welcome to my Portfolio</motion.h1>
                {!isSSR && <p className={`${Style["Home-paragraph"]}   ${Style[`Home-paragraph-${Theme[context]}`]}`}>
                    My name is 
                    Carlos Alexandre Oliveira Junior
                    I’m a .Net/Node Fullstack Developer
                    Im currently working as a freelancer developer
                    and i’m open to formal work
                </p>}
            </div>      
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
        </motion.div>
    </>
    )
}