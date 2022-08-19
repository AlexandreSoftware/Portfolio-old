import { faBugSlash, faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import SocialsCard from "../../Common/SocialsCards/SocialsCard";
import DetailsCard from "./DetailsCard";
import Education from "./Education";
import Experience from "./Experience";
import ExperienceCard from "./ExperienceAndEducationCard";
import ExperienceBar from "./ExperienceBar";
import ExpertiseCard from "./ExpertiseCard";
import LanguageExperience from "./LanguageExperience";
import PagesExperience from "./PagesExperience";
import Style from "./Styles/ResumeCard.module.css"
export default function ResumeCard(){
    const [languageContext,SetLanguageContext] =useContext(LanguageContext);
    return(
        <>
            <h1 className={Style.ResumeCardTitle}>My Resume</h1>
            <div className={`${Style.ResumeCard}`}>
                <DetailsCard Title={languageContext == Language.EN_US ? "My Experience" :"Minha Experiencia"}>
                    <Experience/>
                </DetailsCard>
                <DetailsCard Title={languageContext == Language.EN_US ? "My Education":"Minha Educacao"}>
                    <Education/>
                </DetailsCard>
                <div className={Style.TwoDetails}>
                    <DetailsCard Title={languageContext == Language.EN_US ? "Programming Experience":"Experiencia em Programacao"}>
                        <PagesExperience/>   
                    </DetailsCard>
                    <DetailsCard Title={languageContext == Language.EN_US ? "Language Proficiency":"Proficiencia em Linguas"}>
                        <LanguageExperience/>
                    </DetailsCard>
                </div>
            </div>
        </>
    )
}