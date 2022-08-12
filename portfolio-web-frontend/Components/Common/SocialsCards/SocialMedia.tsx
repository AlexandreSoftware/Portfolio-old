import { icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";
import Style from "./Styles/SocialMedia.module.css"

interface SocialMediaProps{
    icon : IconProp,
    link : string,
    color : string,
}
export default function SocialMedia(props:SocialMediaProps) {
    return(
        <a 
        href={props.link} className={Style.MediaLink}>
            <FontAwesomeIcon className={Style.MediaImage}  icon={props.icon} color={props.color} />
        </a>
    )
}