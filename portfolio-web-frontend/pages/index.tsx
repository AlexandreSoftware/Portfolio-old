import { faCartArrowDown, faPrint } from "@fortawesome/free-solid-svg-icons"
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
import Navbar from "../Components/Common/Navbar/Navbar"
import TwoImages from "../Components/Pages/Home/TwoImages"
import IntroductionCard from "../Components/Pages/Home/IntroductionCard"
import SocialsCard from "../Components/Common/SocialsCards/SocialsCard"
import { zIndex } from "html2canvas/dist/types/css/property-descriptors/z-index"
import LanguageContext, { Language } from "../utils/LanguageContext"
import LittleBar from "../Components/Common/LittleBar"
import ResumeCard from "../Components/Pages/Home/ResumeCard"

export default function Home() {
    const [themeContext,SetThemeContext] =useContext(ThemeContext),
     [languageContext,SetLanguageContext] =useContext(LanguageContext),
     [icon,SetIcon] = useState(GetIcon(Theme.Base,false)),
     [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        SetIcon(GetIcon(themeContext,false))
        setIsSSR(false)
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(themeContext,false))
    },[themeContext])
    return (
        <>
            
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
                <div style={{paddingLeft:"5%",width:"100%", zIndex:"11"}}>
                    <SocialsCard/>
                </div>
                <TwoImages LeftImage={"/Profile Picture/Irl profile picture.jpeg"} RightImage={"/Profile Picture/vtuber profile picture.png"}/>
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
                <div className={Style.ButtonAndHeader}>
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
                        >{languageContext == Language.EN_US ? "Welcome to my Portfolio": "Bem-vindo ao meu Portfólio"} </motion.h1>
                    <div className={Style.ResumeDownloadButton}>
                        <StyledButton whereTo="external" link="https://github.com/xandrf/MyResume/blob/main/Resume-Portuguese.pdf" height={7} width={20} icon={faPrint}>{languageContext == Language.EN_US ?  "Print Resume" : "Imprimir Cv"}</StyledButton>
                    </div>
                </div>

            </div>      
            <Navbar navbarIntersects={true} />
            <IntroductionCard></IntroductionCard>
            <ResumeCard/>
            <div className={Style.SixSkillCardsContainer}>
                <SixSkillCards/>
            </div>
            <div className={Style.ProjectsContainer}> 
                <ProjectCards/>
            </div>
            <AnimatePresence exitBeforeEnter>
            <BackgroundWLetters></BackgroundWLetters>
            </AnimatePresence>
            <div className={Style.ProjectpricingCards}>
                {!isSSR&&
                    <ProjectPricingCards/>
                }
            </div>
            <StyledButton link="mailto:xandrf@xandrfdev.com" whereTo="external" width={15} height={6}>
                Contact Me
            </StyledButton>

        </motion.div>
    </>
    )
}