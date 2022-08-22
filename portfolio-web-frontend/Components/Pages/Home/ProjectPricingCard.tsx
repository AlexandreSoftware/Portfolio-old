import { ReactElement, useContext, useEffect, useState } from "react"
import Style from "./Styles/ProjectPricingCard.module.css"
import Listelement from "./ListElement"
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import StyledButton from "../../Common/StyledButton"
import { motion } from "framer-motion"
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
        <motion.div
        whileHover={{
            scale:1.2
        }}
        className={Style.ProjectPricingCardContainer}>
            <div className={`${Style.ProjectPricingCard} ${isSSR?"":Style[`ProjectPricingCard-${Theme[context]}`]}`}>
                <h3>{props.title}</h3>
                <div>Pricing Starting at </div>
                <div className={Style.pricing}>${props.pricing}</div>
                <ol className={Style.list}>{props.children}</ol>
                <div className={Style.ProjectButton}>
                    <StyledButton link="mailto:xandrf@xandrfdev.com" whereTo="external" width={15} height={5.5}>
                        Contact Me
                    </StyledButton>
                </div>
            </div>
            <div className={Style.asterisk}>*{props.asterisk}</div>
        </motion.div>
    )
}