import { useState, useContext, useEffect } from "react"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import Background from "./Background"
import Footer from "./Footer"
import LightBar from "./LightBar"
import Navbar from "./Navbar"
import SocialsCard from "./SocialsCard"

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
                <Navbar/>
                {(!isSSR && context==Theme.HighTechRed) && <>
                {console.log(context)}
                <LightBar side="Left"></LightBar><LightBar side="Right"></LightBar>
                 </>}
                <SocialsCard/>
                {!isSSR &&<Background/>}
                {props.children}
                <Footer/>
            </>)
}