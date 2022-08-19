import Style from "./Styles/Test.module.css"
import { Theme } from "../utils/ThemeContext"
import BackgroundChangeBall from "../Components/Common/Background/BackgroundChangeBall"
import { useEffect, useState } from "react"
import TwoImages from "../Components/Pages/Home/TwoImages"
import ColorCircle from "../Components/Common/Navbar/ColorCircle"
import SimpleColorCircle from "../Components/Common/Navbar/SimpleColorCircle"
import IntroductionCard from "../Components/Pages/Home/IntroductionCard"
export default function Test() {
    const [state,setState] = useState<Element>()
    useEffect(() => {
        let redCircle = document.querySelector("[class^='ColorCircle']")
        setState(redCircle!)
    }, [])
    
    
    return (
        <>
            <div className={Style.Test}>
                <IntroductionCard></IntroductionCard>
            </div>
        </>
    )

}