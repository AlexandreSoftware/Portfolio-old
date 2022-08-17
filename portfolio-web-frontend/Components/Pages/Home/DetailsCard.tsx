import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import LittleBar from "../../Common/LittleBar";
import Style from "./Styles/DetailsCard.module.css"
interface DetailsCardProps{
    children : any,
    Title : string
}
export default function DetailsCard(props:DetailsCardProps) {
    const [themeContext] =useContext(ThemeContext);
    return(
        <motion.div
        className={`${Style.DetailsCard} ${Style[`DetailsCard-${Theme[themeContext]}`]}`}>
            <h2 className={Style.Title}>
                {props.Title}
            </h2>
            <div className={Style.LittleBar}>
                <LittleBar/>
            </div>
            <div className={Style.Content}>
                {props.children}
            </div>    
        </motion.div>

    )
}