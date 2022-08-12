import ProjectSummaryCard from "../Components/Pages/Projects/ProjectSummaryCard"
import Loading from "../Components/Common/SocialsCards/Loading"
import Style from "./Styles/Test.module.css"
import { Theme } from "../utils/ThemeContext"
import BackgroundChangeBall from "../Components/Common/Background/BackgroundChangeBall"
import { useEffect, useState } from "react"
import TwoImages from "../Components/Pages/Home/TwoImages"
export default function Test() {
    const [state,setState] = useState<Element>()
    useEffect(() => {
        let redCircle = document.querySelector("[class^='ColorCircle']")
        setState(redCircle!)
    }, [])
    
    
    return (
        <div className={Style.Test}>
            <TwoImages LeftImage={"a"} RightImage={"a"}/>
        </div>
    )

}