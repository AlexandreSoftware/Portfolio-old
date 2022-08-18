import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import ExperienceBar from "./ExperienceBar";
import Style from "./Styles/PagesExperience.module.css"
export default function PagesExperience() {
    const [themeContext] =useContext(ThemeContext);
    return(
        <div className={Style.PagesExperience}>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>C#:</div> <ExperienceBar progresspercent={30} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>Asp.Net:</div> <ExperienceBar progresspercent={25} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>Next.Js:</div> <ExperienceBar progresspercent={15} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>Javascript:</div> <ExperienceBar progresspercent={18} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>Typescript:</div> <ExperienceBar progresspercent={15} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.PagesExperienceItemInside}><div>React:</div> <ExperienceBar progresspercent={17} experiencecheckpoints={["1","2","3","4","5+"]} /></div></div>
        </div>

    )    
}