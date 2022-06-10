import { ReactElement } from "react"
import IndividualSkill from "./IndividualSkill"
import Style from "./Styles/SkillsContainer.module.css"
interface SkillsContainerProps{
    children : ReactElement<typeof IndividualSkill> | ReactElement<typeof IndividualSkill>[]
}
export default function SkillsContainer(props:SkillsContainerProps) {
    return(
        <ul className={Style.SkillContainer}>
            {props.children}
        </ul>
    )
}