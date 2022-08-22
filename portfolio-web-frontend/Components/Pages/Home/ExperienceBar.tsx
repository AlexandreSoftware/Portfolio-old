import { Timeline } from "primereact/timeline"
import Style from "./Styles/ExperienceBar.module.css"
import VerticalBar from "./VerticalBar"
interface ExperienceBarProps{
    experiencecheckpoints : [string,string,string,string,string],
    progresspercent : number
}
export default function ExperienceBar(props:ExperienceBarProps) {
    return(<div className={Style.ExperienceBar}>
        <ol className={Style.ExperienceBarCheckPoints}> 
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[0]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[1]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[2]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[3]}</div><VerticalBar/></li>
            <li className={Style.ExperienceCheckpoint}><div className={Style.ExperienceCheckPointText}>{props.experiencecheckpoints[4]}</div><VerticalBar/></li>
        </ol>
            <div className={Style.Bar}>
                <div className={Style.ProgressBar} style={{width:props.progresspercent+"%"}}>

                </div>
            </div>
        </div>)
}