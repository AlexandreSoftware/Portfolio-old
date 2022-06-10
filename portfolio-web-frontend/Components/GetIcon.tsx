import purplelogo from "/Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "/Icons/XandrfDevLogoBase.svg"
import HightechredLogo from "/Icons/XandrfDevLogoHighTechRed.svg"
import KissLandLogo from "/Icons/XandrfDevLogoKissLand.svg"
import { Theme } from "../utils/ThemeContext"
import Image from "next/image"
export default function GetIcon(context:Theme) {
    return <img src={context== Theme.Base ?
            BaseLogo: 
            context === Theme.HighTechPurple ?
                purplelogo  
                :context===Theme.HighTechRed ?
                    HightechredLogo
                        :KissLandLogo}/>
}