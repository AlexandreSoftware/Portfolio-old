import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import ProfileImage from "../Components/Pages/About/ProfileImage";
import BackgroundWLetters from "../Components/Common/Background/BackgroundWLetters";
import GetIcon from "../Components/Common/GetIcon";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/About.module.css"
export default function About() {
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
        <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial:{
                opacity:0
            },
            animate:{
                opacity:1,
                
            }

        }}className={Style.About}>
            {!isSSR &&<BackgroundWLetters/>}
            {!isSSR && <img src={icon} />}    
            <div className={Style.ProfilePictures}>
                <ProfileImage src="/Profile Picture/Irl profile picture.jpeg"/>
                <ProfileImage src="/Profile Picture/vtuber profile picture.png"/>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
            </p>
        </motion.div>
    )
}