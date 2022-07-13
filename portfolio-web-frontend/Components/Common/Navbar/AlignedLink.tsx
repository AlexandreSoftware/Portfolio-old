import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useContext } from "react";
import ThemeContext, { Theme } from "../../../utils/ThemeContext";
import AlignedText from "./AlignedText";
import Style from "./Styles/AlignedLink.module.css"
interface AlignedLinkProps{
    href:string,
    children :string
}
export default function AlignedLink(props :AlignedLinkProps) {
    let [context,SetContext] = useContext(ThemeContext)
    return (
    <Link href={props.href}>
        <div className={Style.AlignedLinkContainer}>
            <motion.div className={Style.AlignedLink}
                whileHover="hover"
                variants={{
                    hover:{
                        border:"1px solid black",
                        scale:1.2,
                        backgroundColor:GetTheme(context),
                        zIndex:5
                    }
                }}
            ><AlignedText>{props.children}</AlignedText></motion.div>
        </div>
    </Link>
    )
}

function GetTheme(theme:Theme){
    return (theme== Theme.Base ?
    "#6B7FD7":
        theme == Theme.HighTechPurple ?
            "#F05E23"
                :theme==Theme.HighTechRed ?
                "#150B0E"
                        :"#449BAA")

}