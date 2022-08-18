import { faBugSlash, faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import SocialsCard from "../../Common/SocialsCards/SocialsCard";
import DetailsCard from "./DetailsCard";
import Education from "./Education";
import Experience from "./Experience";
import ExperienceCard from "./ExperienceAndEducationCard";
import ExpertiseCard from "./ExpertiseCard";
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
                    <DetailsCard Title={languageContext == Language.EN_US ? "My Expertise":"Minhas Especialidades"}>
                        <ExpertiseCard Icon={faBugSlash} Title={languageContext == Language.EN_US ? "Bug Free Code":"Codigo sem bugs"} description={languageContext == Language.EN_US ? "Code is checked for bugs and glitches":"Codigo checado contra bugs e glitches"}></ExpertiseCard>
                        <ExpertiseCard Icon={faCode} Title={languageContext == Language.EN_US ?"Reliable Code":"Codigo Confiavel"} description={languageContext == Language.EN_US ? "Reliable and battle-tested developer ":"Desenvolvedor confiavel e experiente"}></ExpertiseCard>
                        <ExpertiseCard Icon={faShieldAlt} Title={languageContext == Language.EN_US ?"Safe Code":"Codigo Seguro"} description={languageContext == Language.EN_US ? "Safe and tested code ":"Codigo testado e confiavel"}></ExpertiseCard>
                    </DetailsCard>
                    <DetailsCard Title={languageContext == Language.EN_US ? "My Expertise":"Minhas Especialidades"}>
                        <ExpertiseCard Icon={faBugSlash} Title={languageContext == Language.EN_US ? "Bug Free Code":"Codigo sem bugs"} description={languageContext == Language.EN_US ? "Code is checked for bugs and glitches":"Codigo checado contra bugs e glitches"}></ExpertiseCard>
                        <ExpertiseCard Icon={faCode} Title={languageContext == Language.EN_US ?"Reliable Code":"Codigo Confiavel"} description={languageContext == Language.EN_US ? "Reliable and battle-tested developer ":"Desenvolvedor confiavel e experiente"}></ExpertiseCard>
                        <ExpertiseCard Icon={faShieldAlt} Title={languageContext == Language.EN_US ?"Safe Code":"Codigo Seguro"} description={languageContext == Language.EN_US ? "Safe and tested code ":"Codigo testado e confiavel"}></ExpertiseCard>
                    </DetailsCard>
                </div>
            </div>
        </>
    )
}