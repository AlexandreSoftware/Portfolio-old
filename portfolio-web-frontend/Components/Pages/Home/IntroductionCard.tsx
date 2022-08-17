import { faBugSlash, faCartPlus, faCediSign, faCode, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import SocialsCard from "../../Common/SocialsCards/SocialsCard";
import DetailsCard from "./DetailsCard"
import ExpertiseCard from "./ExpertiseCard";
import Style from "./Styles/IntroductionCard.module.css"
export default function IntroductionCard() {
    const [languageContext,SetLanguageContext] =useContext(LanguageContext);
        return(<div className={`${Style.IntroductionCard}`}>
            <DetailsCard Title={languageContext == Language.EN_US ? "Who am I ?" :"Quem Sou eu ?"}>
                <p> {languageContext == Language.EN_US ?  `My name is 
                    Carlos Alexandre de Oliveira Junior
                    I’m a .Net/Node Fullstack Developer
                    Im currently working as a freelancer developer
                    while open to registered work`: ` Meu nome e 
                    Carlos Alexandre de Oliveira Junior, 
                    Sou um desenvolvedor Fullstack .Net/Node
                    trabalhando como freelancer no momento, enquanto aberto a trabalho registrado`} 
                    </p>
            </DetailsCard>
            <DetailsCard Title={languageContext == Language.EN_US ?"Personal Info":"Informacao Pessoal"}>
            <ul className={Style.InfoList}>
                <li>{languageContext == Language.EN_US ?"Birthdate" : "Data De nascimento"} : 18/10/2001</li>
                <li>Email : xandrf@xandrfdev.com</li>
                <li>{languageContext == Language.EN_US ? "Phone": "Telefone"} : +55 (13) 982148535</li>
                <li>Github : <a href="https://github.com/xandrf" className={Style.InfoListLink}>https://github.com/xandrf</a></li>
                <li className={Style.LastInfoList}>
                    <SocialsCard></SocialsCard>
                </li>
            </ul>
            </DetailsCard>
            <DetailsCard Title={languageContext == Language.EN_US ? "My Expertise":"Minhas Especialidades"}>
                <ExpertiseCard Icon={faBugSlash} Title={languageContext == Language.EN_US ? "Bug Free Code":"Codigo sem bugs"} description={languageContext == Language.EN_US ? "Code is checked for bugs and glitches":"Codigo checado contra bugs e glitches"}></ExpertiseCard>
                <ExpertiseCard Icon={faCode} Title={languageContext == Language.EN_US ?"Reliable Code":"Codigo Confiavel"} description={languageContext == Language.EN_US ? "Reliable and battle-tested developer ":"Desenvolvedor confiavel e experiente"}></ExpertiseCard>
                <ExpertiseCard Icon={faShieldAlt} Title={languageContext == Language.EN_US ?"Safe Code":"Codigo Seguro"} description={languageContext == Language.EN_US ? "Safe and tested code ":"Codigo testado e confiavel"}></ExpertiseCard>
            </DetailsCard>
    </div>)
}