import ProjectSummaryCard from "../Components/Projects/ProjectSummaryCard"
import Loading from "../Components/Loading"
import Style from "./Styles/Test.module.css"
import SocialsCard from "../Components/SocialsCard"
import LightBar from "../Components/LightBar"
import Footer from "../Components/Footer"
import Background from "../Components/Background"
import Navbar from "../Components/Navbar"
import { Theme } from "../utils/ThemeContext"
import BackgroundChangeBall from "../Components/BackgroundChangeBall"
import { useEffect, useState } from "react"
export default function Test() {
    const [state,setState] = useState<Element>()
    useEffect(() => {
        let redCircle = document.querySelector("[class^='ColorCircle']")
        setState(redCircle!)
    }, [])
    
    
    return (
        <div className={Style.Test}>
            {state && <BackgroundChangeBall element={state!}/>}
        </div>
    )

}