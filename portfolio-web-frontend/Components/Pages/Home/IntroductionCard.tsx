import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import DetailsCard from "./DetailsCard"
import Style from "./Styles/IntroductionCard.module.css"
export default function IntroductionCard() {
    const [themeContext] =useContext(ThemeContext);
    return(<div className={`${Style.IntroductionCard} ${Style[`IntroductionCard-${Theme[themeContext]}`]}`}>
            <DetailsCard Title="Who am I ?">a</DetailsCard>
            <DetailsCard Title="Personal Info">n</DetailsCard>
            <DetailsCard Title="My Expertise">c</DetailsCard>
    </div>)
}