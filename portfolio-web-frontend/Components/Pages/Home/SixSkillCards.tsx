import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBox, faCartArrowDown, faComputer, faEarth, faPager, faPerson, faShip, faShippingFast, faTruck, faUser } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import SkillCard from "./SkillCard"
import Styles from "./Styles/SixSkillCards.module.css"
export default function SixSkillCards() {
    const [languageContext,SetLanguageContext] =useContext(LanguageContext);
    return (
        <div className={Styles.SixSkillCards}>
            <SkillCard  Title={languageContext == Language.EN_US ? "A Dedicated Developer":"Um Desenvolvedor Dedicado"} icon={faComputer} >
            {languageContext == Language.EN_US ?
            "A developer dedicated on bringing your idea to life, Using the industry leading tech we can create amazing experiences for the end-user":
            "Um desenvolvedor dedicado em fazer a sua ideia uma realidade, Utilizando tecnologia de ponta podemos criar incriveis experiencias para o usuario"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Pays attention  to your problem":"Presta atencao No seu problema"} icon={faHtml5} >
                {languageContext == Language.EN_US ?
                "Attentive Developer that worries about understanding a clients vision and product, So we can create an experience that users will not forget":
                "Desenvolvedor atencioso que se preocupa em entender a visao e produto do cliente, para ser capaz de criar uma experiencia inesquecivel"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Delivers a unique experience" : "Cria uma experiencia unica"}icon={faEarth} >
                {languageContext == Language.EN_US ?
                "Unique and unforgettable experience, more than cookie-cutter barely strapped-together services, an experience able to WOW your clients":
                "Experiencia unica e inesquecivel, mais do que Aplicativos basicos feitos na gambiarra, uma experiencia capaz de impressionar seus clientes "}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Fast Development" : "Desenvolvimento Veloz"}icon={faShippingFast} >
            {languageContext == Language.EN_US ?
            "Fast Development and Deployment, while making great quality code, an unique approach to development to be able to create software that is readable, fast, and expandable":
            "Desenvolvimento e Implementacao veloz, Mantendo codigo de otima qualidade, uma aproximacao unica a desenvolvimento capaz de criar software compreensivel, rapido e expansivel"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Creates a unique product":"Cria um produto unico"}icon={faBox} >
                {languageContext == Language.EN_US ?
                "Unique product created with passion and care, able to create unique and unforgettable experiences":
                "Produto unico criado com paixao e cuidado, capaz de criar experiencias unicas e inesqueciveis"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Brings your design to life" : "Faz seu design uma realidade"}icon={faUser} >
            {languageContext == Language.EN_US ?
            "Already have a Design in mind, Great, Your vision will be put into code, creating a great product":
            "Ja tem um design em mente, Otimo, Sua vizao agora sera transormada em codigo, criando um lindo produto"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Brings your design to life" : "Faz seu design uma realidade"}icon={faUser} >
            {languageContext == Language.EN_US ?
            "Already have a Design in mind, Great, Your vision will be put into code, creating a great product":
            "Ja tem um design em mente, Otimo, Sua vizao agora sera transormada em codigo, criando um lindo produto"}
            </SkillCard>
            <SkillCard  Title={languageContext == Language.EN_US ? "Brings your design to life" : "Faz seu design uma realidade"}icon={faUser} >
            {languageContext == Language.EN_US ?
            "Already have a Design in mind, Great, Your vision will be put into code, creating a great product":
            "Ja tem um design em mente, Otimo, Sua vizao agora sera transormada em codigo, criando um lindo produto"}
            </SkillCard>

        </div>
    )
}