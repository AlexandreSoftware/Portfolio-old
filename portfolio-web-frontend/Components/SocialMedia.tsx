import { icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animate, motion } from "framer-motion";
import Style from "./Styles/SocialMedia.module.css"

interface SocialMediaProps{
    icon : IconProp,
    link : string,
    color : string,
    delay:number
}
export default function SocialMedia(props:SocialMediaProps) {
    return(
        <motion.a 
        initial="initial"
        animate="animate"
        variants={{
            initial:{
                x:-100
            },
            animate:{
                x:0,
                transition:{
                    delay:0.5 + props.delay,
                    duration:0.3,
                    ease:"linear"
                }
            }
        }}
        href={props.link} className={Style.MediaLink}>
            <FontAwesomeIcon className={Style.MediaImage}  icon={props.icon} color={props.color} />
        </motion.a>
    )
}