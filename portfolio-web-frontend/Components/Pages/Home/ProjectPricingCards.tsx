import ListElement from "./ListElement";
import ProjectPricingCard from "./ProjectPricingCard";
import Style from "./Styles/ProjectPricingCards.module.css"
export default function ProjectPricingCards() {
    return(
        <div className={Style.ProjectPricingCards}>
            <ProjectPricingCard pricing={500} title="Standard Project" asterisk="support is paid by month, the first 3 months are on a negotiable discount">
                <ListElement>1-3 pages</ListElement>
                <ListElement>2-3 weeks delivery</ListElement>
                <ListElement>3 months of support*</ListElement>
                <ListElement>Painless deployment</ListElement>
            </ProjectPricingCard>
            <ProjectPricingCard pricing={500} title="Standard Project" asterisk="support is paid by month, the first 3 months are on a negotiable discount">
                <ListElement>1-3 pages</ListElement>
                <ListElement>2-3 weeks delivery</ListElement>
                <ListElement>3 months of support*</ListElement>
                <ListElement>Painless deployment</ListElement>
            </ProjectPricingCard>
            <ProjectPricingCard pricing={500} title="Standard Project" asterisk="support is paid by month, the first 3 months are on a negotiable discount">
                <ListElement>1-3 pages</ListElement>
                <ListElement>2-3 weeks delivery</ListElement>
                <ListElement>3 months of support*</ListElement>
                <ListElement>Painless deployment</ListElement>
            </ProjectPricingCard>
        </div>
    )
}