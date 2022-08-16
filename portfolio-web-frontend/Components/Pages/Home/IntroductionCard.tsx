import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext"
import SocialsCard from "../../Common/SocialsCards/SocialsCard";
import DetailsCard from "./DetailsCard"
import ExpertiseCard from "./ExpertiseCard";
import Style from "./Styles/IntroductionCard.module.css"
export default function IntroductionCard() {
    const [themeContext] =useContext(ThemeContext);
    return(<div className={`${Style.IntroductionCard} ${Style[`IntroductionCard-${Theme[themeContext]}`]}`}>
            <DetailsCard Title="Who am I ?">
                <p> My name is 
                    Carlos Alexandre Oliveira Junior
                    I’m a .Net/Node Fullstack Developer
                    Im currently working as a freelancer developer
                    and i’m open to formal work
                    </p>
            </DetailsCard>
            <DetailsCard Title="Personal Info">
            <ul className={Style.InfoList}>
                <li>Birthdate : 18/10/2001</li>
                <li>Email : xandrf@xandrfdev.com</li>
                <li>Phone : +55 (13) 982148535</li>
                <li>Github : <a href="https://github.com/xandrf" className={Style.InfoListLink}>https://github.com/xandrf</a></li>
                <SocialsCard></SocialsCard>
            </ul>
            </DetailsCard>
            <DetailsCard Title="My Expertise">
                <ExpertiseCard Icon={faCartPlus} Title="UnderAttack" description="Ur being taken"></ExpertiseCard>
                <ExpertiseCard Icon={faCartPlus} Title="UnderAttack" description="Ur being taken"></ExpertiseCard>
                <ExpertiseCard Icon={faCartPlus} Title="UnderAttack" description="Ur being taken"></ExpertiseCard>
            </DetailsCard>
    </div>)
}