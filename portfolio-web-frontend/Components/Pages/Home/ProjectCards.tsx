import { faBootstrap, faFigma, faInternetExplorer, faJs, faReact, faReacteurope } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faDiagramNext, faFontAwesome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appendFileSync } from "fs";
import { useContext, useEffect, useState } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import ProjectCard from "./ProjectCard";
import Style from "./Styles/ProjectCards.module.css"
export default function ProjectCards() {
const [languageContext,SetLanguageContext] =useContext(LanguageContext),
[isSSR, SetIsSSR] = useState(true);

useEffect(()=>{
    SetIsSSR(false)
},[])
return(
    !isSSR &&
    <div className={Style.ProjectCards}>
            <ProjectCard title="Wordle Clone" image="/Projects/WordleCloneProject.svg" left={false} alt={false} >
                {languageContext == Language.EN_US ? "Remake of the popular game \"Wordle\", Created using :":"Popular jogo \"Wordle\" Refeito utilizando : "} 
                <ul>
                    <li>Next.Js <FontAwesomeIcon icon={faReact}/></li>
                    <li>Bootstrap <FontAwesomeIcon icon={faBootstrap}/></li>
                    <li>Framer motion <FontAwesomeIcon icon={faReacteurope}/></li>
                    <li>Typescript <FontAwesomeIcon icon={faJs}/></li>
                    <li>Express <FontAwesomeIcon icon={faJs}/></li>
                    <li>MongoDb <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></li>
                    <li>Redis <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></li>
                    <li>Figma <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon></li>
                </ul>
            </ProjectCard>
            <ProjectCard title="Cesta" image="/Projects/CestaProject.svg" left={true} alt={true}>
                {languageContext == Language.EN_US ? 
                "Cesta is the last project i made while in university, Created using":
                "Cesta foi o meu ultimo projeto feito enquanto na universidade, criado usando"} 
                <ul>
                    <li>React Native <FontAwesomeIcon icon={faReact}></FontAwesomeIcon></li>
                    <li>Expo <FontAwesomeIcon icon={faReacteurope}></FontAwesomeIcon></li>
                    <li>Font awesome <FontAwesomeIcon icon={faFontAwesome}></FontAwesomeIcon></li>
                    <li>Asp.net <FontAwesomeIcon icon={faCode}></FontAwesomeIcon></li>
                    <li>C# <FontAwesomeIcon icon={faCode}></FontAwesomeIcon></li>
                    <li>PostgeSql <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></li>
                    <li>Figma <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon></li>
                </ul>
            </ProjectCard>
        </div>
    )
}