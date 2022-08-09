import { motion } from "framer-motion"
import Link from "next/link"
import { useContext } from "react"
import ThemeContext, { Theme } from "../../utils/ThemeContext"
import Style from "./Styles/StyledButton.module.css"
interface StyledButtonProps{
    whereTo : "internal" | "external",
    link : string
    children :string
    height? : number,
    width? : number
}
export default function StyledButton(props:StyledButtonProps) {
    const [context,SetContext] =useContext(ThemeContext)
    return (
        <motion.div
        whileHover="hover"
        initial="initial"
        variants={{
            initial:{
                scale:1
            },
            hover:{
                scale:1.1
            }
        }}
        className={Style.ButtonContainer}>
            {props.whereTo == "internal" ? 
                <Link href={props.link}>
                    <button className={Style[`Button-${Theme[context]}`]} style={{height : props.height + "vh", width: props.width + "vh"}}>
                        {props.children}
                    </button>    
                </Link>
            : 
                <a href={props.link} >
                    <button className={Style[`Button-${Theme[context]}`]} style={{height : props.height + "vh", width: props.width + "vh"}}>
                        {props.children}
                    </button>    
                </a>

            }
        </motion.div>
    )
}