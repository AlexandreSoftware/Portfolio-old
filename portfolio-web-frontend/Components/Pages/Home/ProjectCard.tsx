import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import Style from "./Styles/ProjectCard.module.css"
interface ProjectCardProps{
    image : string,
    title : string,
    children : any,
    left : boolean,
    alt : boolean
}
export default function ProjectCard(props:ProjectCardProps) {
    const [themeContext] =useContext(ThemeContext);
    return (
        <div className={`${Style.ProjectCard} ${props.left ? Style["ProjectCard-Left"] : Style["ProjectCard-Right"] } ${Style[`ProjectCard-${Theme[themeContext]}${props.alt?"-alt":""}`]}`}>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
            <div  className={Style.image}>
                <img src={props.image} width={100} height={100}/>
            </div>
        </div>
    )
}