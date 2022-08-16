import { AnimatePresence, motion } from "framer-motion"
import { useState, useContext, useEffect } from "react"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import Background from "./Common/Background/Background"
import Footer from "./Common/Footer/Footer"
import LightBar from "./Common/Background/LightBar"
import Navbar from "./Common/Navbar/Navbar"
import SocialsCard from "./Common/SocialsCards/SocialsCard"

interface AppProps{
    children: any
}
export default function App(props:AppProps) {
    const [isSSR, setIsSSR] = useState(true);
    const [context,SetContext] =useContext(ThemeContext)
    useEffect(()=>{
        setIsSSR(false)
    },[])
    return (
        <>
        {(!isSSR && context==Theme.HighTechRed) && <>
        <LightBar side="Left"></LightBar><LightBar side="Right"></LightBar>
         </>}
            <motion.div>
                {!isSSR &&<Background/>}
                <div >
                    {props.children}
                </div>
                <Footer/>
            </motion.div>
            </>)
}