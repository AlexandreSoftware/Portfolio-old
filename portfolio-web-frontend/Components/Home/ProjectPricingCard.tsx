import { ReactElement, useContext, useEffect, useState } from "react"
import Style from "./Styles/ProjectPricingCard.module.css"
import Listelement from "./ListElement"
import ThemeContext, { Theme } from "../../utils/ThemeContext"
interface ProjectPricingCardProps{
    title: string,
    pricing : number,
    children: ReactElement<typeof Listelement>[]
    asterisk : string
}
export default function ProjectPricingCard(props: ProjectPricingCardProps) {
    const [context,SetContext] =useContext(ThemeContext)
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        setIsSSR(false)
    })
    return(
        <div className={Style.ProjectPricingCardContainer}>
            <div className={`${Style.ProjectPricingCard} ${isSSR?"":Style[`ProjectPricingCard-${Theme[context]}`]}`}>
                <h3>{props.title}</h3>
                <div>Pricing Starting at </div>
                <div>${props.pricing}</div>
                <ol>{props.children}</ol>
                <button className={`${Style.ProjectButton} ${isSSR?"":Style[`ProjectButton-${Theme[context]}`]}`}>Contact Me</button>
            </div>
            <div className={Style.asterisk}>*{props.asterisk}</div>
        </div>
    )
}