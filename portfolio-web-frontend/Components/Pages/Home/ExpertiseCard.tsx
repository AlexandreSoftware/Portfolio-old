import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LittleBar from "../../Common/LittleBar";
import Style from "./Styles/ExpertiseCard.module.css"
interface ExpertiseCardProps{
    Icon : IconProp,
    Title : string,
    description : string
}
export default function ExpertiseCard(props:ExpertiseCardProps) {
    return(
        <div className={Style.ExpertiseCard}>
            <div className={Style.Icon}>
                <FontAwesomeIcon icon={props.Icon} ></FontAwesomeIcon>
            </div>
            <div className={Style.TitleAndDescription}>
                <h3>{props.Title}</h3>
                <p>{props.description}</p>
                <div className={Style.LittleBar}>
                    <LittleBar/>
                </div>
            </div>
        </div>

    );

}