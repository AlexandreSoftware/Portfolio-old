import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import ListElement from "../Components/ListElement"
import ProjectPricingCards from "../Components/ProjectPricingCards"
import Style from "./Styles/Test.module.css"
export default function Test() {
    return (
        <div className={Style.Test}>
            <ProjectPricingCards/>
        </div>
    )

}