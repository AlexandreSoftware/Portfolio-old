import ProjectSummaryCard from "../Components/Pages/Projects/ProjectSummaryCard"
import Style from "./Styles/Test.module.css"
import { Theme } from "../utils/ThemeContext"
import BackgroundChangeBall from "../Components/Common/Background/BackgroundChangeBall"
import { useEffect, useState } from "react"
import TwoImages from "../Components/Pages/Home/TwoImages"
import ColorCircle from "../Components/Common/Navbar/ColorCircle"
import SimpleColorCircle from "../Components/Common/Navbar/SimpleColorCircle"
export default function Test() {
    const [state,setState] = useState<Element>()
    useEffect(() => {
        let redCircle = document.querySelector("[class^='ColorCircle']")
        setState(redCircle!)
    }, [])
    
    
    return (
        <div className={Style.Test}>
            <SimpleColorCircle Color="171A21"  />
        </div>
    )

}