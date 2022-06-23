import Purplelogo from "/Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "/Icons/XandrfDevLogoBase.svg"
import HightechredLogo from "/Icons/XandrfDevLogoHighTechRed.svg"
import KissLandLogo from "/Icons/XandrfDevLogoKissLand.svg"
import { Theme } from "../utils/ThemeContext"
import { motion } from "framer-motion"
export default function GetIcon(context:Theme) {
    let iconConditional = context== Theme.Base ?
        BaseLogo:
            context == Theme.HighTechPurple ?
                Purplelogo
                    :context==Theme.HighTechRed ?
                        HightechredLogo
                            :KissLandLogo;

    return <motion.img
        initial="imageInitial"
        animate="imageAnimate"
        exit="imageExit"
        variants={{
            imageInitial:{
                opacity:0
            },
            imageAnimate:{
                opacity:1
            },
            imageExit:{
                opacity:0,
                transition:{
                    duration:0.4
                }
            }

        }}
    src={iconConditional}/>
}