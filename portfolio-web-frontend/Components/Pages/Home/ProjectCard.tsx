import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import LittleBar from "../../Common/LittleBar";
import Style from "./Styles/ProjectCard.module.css"
interface ProjectCardProps{
    image : string,
    title : string,
    children : any,
    left : boolean,
    alt : boolean
}
export default function ProjectCard(props:ProjectCardProps) {
    return (
        <div className={`${Style.ProjectCard} ${props.left ? Style["ProjectCard-Left"] : Style["ProjectCard-Right"] } ${Style[`ProjectCard-bg${props.alt?"-alt":""}`]}`}>
            <h3 className={Style.Title}>
                {props.title}
                <div className={Style.LittleBar}> 
                    <LittleBar/>
                </div>
            </h3>
            <p>{props.children}</p>
            <div  className={Style.image}>
                <img src={props.image} width={100} height={100}/>
            </div>
        </div>
    )
}