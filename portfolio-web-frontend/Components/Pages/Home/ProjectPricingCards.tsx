import { useContext } from "react";
import LanguageContext, { Language } from "../../../utils/LanguageContext";
import ListElement from "./ListElement";
import ProjectPricingCard from "./ProjectPricingCard";
import Style from "./Styles/ProjectPricingCards.module.css"
export default function ProjectPricingCards() {

    const [languageContext] =useContext(LanguageContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <div className={Style.ProjectPricingCards}>
            <ProjectPricingCard pricing={500} title={languageContext == Language.EN_US ? "Basic Package":"Pacote basico"} asterisk={languageContext == Language.EN_US ? "support is paid by month, the first 3 months are on a negotiable discount": "suporte e pago por mes, os primeiros 3 meses tem um desconto negociavel"}>
                <ListElement>{"1 "+ (languageContext == Language.EN_US ? "Page" : "Pagina")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "1 week delivery**" : "Entrega em 1 semana**")}</ListElement>
                <ListElement>{"3 "+(languageContext == Language.EN_US ? "Months of support*" : "Meses De Suporte")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "Painless deployment" : "Deploy Sem Complicacoes")}</ListElement>
            </ProjectPricingCard>
            <ProjectPricingCard pricing={500} title={languageContext == Language.EN_US ? "Standard Project":"Projeto Padrao"} asterisk={languageContext == Language.EN_US ? "support is paid by month, the first 3 months are on a negotiable discount": "suporte e pago por mes, os primeiros 3 meses tem um desconto negociavel"}>
                <ListElement>{"2-3 "+ (languageContext == Language.EN_US ? "Pages" : "Paginas")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "2-3 weeks delivery**" : "Entrega em 2-3 semanas**")}</ListElement>
                <ListElement>{"3 "+(languageContext == Language.EN_US ? "Months of support*" : "Meses De Suporte")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "Painless deployment" : "Deploy Sem Complicacoes")}</ListElement>    
            </ProjectPricingCard>
            <ProjectPricingCard pricing={500} title={languageContext == Language.EN_US ? "Premium Project":"Projeto Premium"} asterisk={languageContext == Language.EN_US ? "support is paid by month, the first 3 months are on a negotiable discount": "suporte e pago por mes, os primeiros 3 meses tem um desconto negociavel"}>    
                <ListElement>{"3-5 "+ (languageContext == Language.EN_US ? "Pages" : "Paginas")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "1 month delivery**" : "Entrega em 1 mes**")}</ListElement>
                <ListElement>{"3 "+(languageContext == Language.EN_US ? "Months of support*" : "Meses De Suporte")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "Painless deployment" : "Deploy Sem Complicacoes")}</ListElement>
            </ProjectPricingCard>
            <ProjectPricingCard pricing={500} title={languageContext == Language.EN_US ? "Custom Project":"Projeto Customizado"} asterisk={languageContext == Language.EN_US ? "support is paid by month, the first 3 months are on a negotiable discount": "suporte e pago por mes, os primeiros 3 meses tem um desconto negociavel"}>                
                <ListElement>{" * "+ (languageContext == Language.EN_US ? "Pages" : "Paginas")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "* months delivery**" : "Entrega em * meses**")}</ListElement>
                <ListElement>{"3 "+(languageContext == Language.EN_US ? "Months of support*" : "Meses De Suporte")}</ListElement>
                <ListElement>{(languageContext == Language.EN_US ? "Painless deployment" : "Deploy Sem Complicacoes")}</ListElement>
            </ProjectPricingCard>    
        </div>
    )
}