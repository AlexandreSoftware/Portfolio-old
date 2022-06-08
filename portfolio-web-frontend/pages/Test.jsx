import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import ListElement from "../Components/ListElement"
import ProjectPricingCard from "../Components/ProjectPricingCard"
import Style from "./Styles/Test.module.css"
export default function Test() {
    return (
        <div className={Style.Test}>
            <ProjectPricingCard pricing={500} title="Standard Project" asterisk="support is paid by month, the first 3 months are on a negotiable discount">
                <ListElement>1-3 pages</ListElement>
                <ListElement>2-3 weeks delivery</ListElement>
                <ListElement>3 months of support*</ListElement>
                <ListElement>Painless deployment</ListElement>
            </ProjectPricingCard>
        </div>
    )

}