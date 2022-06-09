import ProjectSummaryCard from "../Components/Projects/ProjectSummaryCard"
import Style from "./Styles/Test.module.css"
export default function Test() {
    
    return (
        <div className={Style.Test}>
            <ProjectSummaryCard Title="Wordle-Clone" imageLink="/Logo WordleClone.svg"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique neque volutpat neque nulla sed vel. A justo et, elit, in sit gravida in. Vel integer pellentesque magna aliquet.
            </ProjectSummaryCard>
        </div>
    )

}