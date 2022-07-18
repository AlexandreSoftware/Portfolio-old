import { ThemeContext } from "@emotion/react"
import { useContext } from "react"
import StyledButton from "../../Common/StyledButton"
import Style from "./Styles/ProjectSummaryCard.module.css"
interface ProjectSummaryCardProps{
    imageLink:string,
    Title: string,
    children : string
}
export default function ProjectSummaryCard(props:ProjectSummaryCardProps) {
    const [context,setContext] = useContext(ThemeContext);
    return (
        <div className={Style.ProjectSummaryCard}>
            <div className={Style.ImageContainer}>
                <img src={props.imageLink} width={100} height={100}/>
            </div>
            <h2>
                {props.Title}
            </h2>
            <p>
                {props.children}
            </p>
            <StyledButton link="/Home" whereTo="internal" width={18} height={8}>
                See More
            </StyledButton>
        </div>
    )
}