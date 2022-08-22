import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import ExperienceBar from "./ExperienceBar";
import Style from "./Styles/LanguageExperience.module.css"
export default function LanguageExperience() {
    const [themeContext] =useContext(ThemeContext);
    return(
        <div className={Style.LanguageExperience}>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.LanguageExperienceItemInside}><div>Portuguese</div> <ExperienceBar progresspercent={100} experiencecheckpoints={["A2","B1","B2","C1","C2"]} /></div></div>
            <div className={Style.ExperienceBarItem+" "+Style["ExperienceBarItem_"+Theme[themeContext]]}><div className={Style.LanguageExperienceItemInside}><div>English</div> <ExperienceBar progresspercent={80} experiencecheckpoints={["A2","B1","B2","C1","C2"]} /></div></div>
        </div>

    )    
}