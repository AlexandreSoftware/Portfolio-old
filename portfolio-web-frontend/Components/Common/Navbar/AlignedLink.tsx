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
        <div className={`${Style.AlignedLink} ${Style[`AlignedLink-${Theme[context]}`]}`}>
            <AlignedText>{props.children}</AlignedText>
        </div>
    </Link>
    )
}
