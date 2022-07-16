import ProjectSummaryCard from "../Components/Pages/Projects/ProjectSummaryCard"
import Loading from "../Components/Common/SocialsCards/Loading"
import Style from "./Styles/Test.module.css"
import { Theme } from "../utils/ThemeContext"
import BackgroundChangeBall from "../Components/Common/Background/BackgroundChangeBall"
import { useEffect, useState } from "react"
export default function Test() {
    const [state,setState] = useState<Element>()
    useEffect(() => {
        let redCircle = document.querySelector("[class^='ColorCircle']")
        setState(redCircle!)
    }, [])
    
    
    return (
        <div className={Style.Test}>
            <ProjectSummaryCard Title="Wordle-Clone" imageLink="/Logo WordleClone.svg"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique neque volutpat neque nulla sed vel. A justo et, elit, in sit gravida in. Vel integer pellentesque magna aliquet.
            </ProjectSummaryCard>
        </div>
    )

}