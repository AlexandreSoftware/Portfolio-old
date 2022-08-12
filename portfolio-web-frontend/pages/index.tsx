import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import BackgroundWLetters from "../Components/Common/Background/BackgroundWLetters"
import GetIcon from "../Components/Common/GetIcon"
import ProjectCards from "../Components/Pages/Home/ProjectCards"
import ProjectPricingCards from "../Components/Pages/Home/ProjectPricingCards"
import SixSkillCards from "../Components/Pages/Home/SixSkillCards"
import StyledButton from "../Components/Common/StyledButton"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import Style from "./Styles/Home.module.css"
import OldNavbar from "../Components/Common/Navbar/Navbar"
import TwoImages from "../Components/Pages/Home/TwoImages"
import Image from "next/image"
export default function Home() {
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
        <>
            <AnimatePresence exitBeforeEnter>
                {!isSSR && <BackgroundWLetters/>}
            </AnimatePresence>
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
            }} className={Style.HomePage}>
                <TwoImages LeftImage={<img src={"/Profile Picture/Irl profile picture.jpeg"} width={100} height={100}/>} RightImage={<img src={"/Profile Picture/vtuber profile picture.png"} width={100} height={100}/>}/>
                <div className={Style["Home-logo"]}>
                    {!isSSR && <motion.img
                        initial="imageInitial"
                        animate="imageAnimate"
                        variants={{
                            imageInitial:{
                                opacity:0.2,
                            },
                            imageAnimate:{
                                opacity:1,
                                rotate:[0,10,-10,0],
                                transition:{
                                    duration:0.3
                                }
                            }
                        }} src={icon} />}
                
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


                {!isSSR && <p className={Style["Home-paragraph"]}>
                    My name is 
                    Carlos Alexandre Oliveira Junior
                    I’m a .Net/Node Fullstack Developer
                    Im currently working as a freelancer developer
                    and i’m open to formal work
                </p>}
                <div className={Style.ResumeDownloadButton}>
                    <StyledButton whereTo="external" link="https://github.com/xandrf/MyResume/blob/main/Resume-Portuguese.pdf" height={10} width={20}>Download My Resume</StyledButton>
                </div>

            </div>      
            <OldNavbar></OldNavbar>
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
            <StyledButton link="mailto:xandrf@xandrfdev.com" whereTo="external" width={18} height={8}>
                Contact Me
            </StyledButton>
        </motion.div>
    </>
    )
}