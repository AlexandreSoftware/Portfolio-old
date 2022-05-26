import purplelogo from "../Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "../Icons/XandrfDevLogoBase.svg"
import hightechredlogo from "../Icons/XandrfDevLogoHighTechRed.svg"
import { useContext } from "react"
import ThemeContext, { Theme } from "../utils/ThemeContext"
export default function GetIcon(context:Theme) {
    console.log(context == Theme.HighTechPurple)
    console.log(context)
    console.log(context == Theme.HighTechRed)
    console.log(context == Theme.Base)
    console.log(context== Theme.Base ? BaseLogo: context === Theme.HighTechPurple ?purplelogo :hightechredlogo)
    console.log("contexto")
    return <img src={context== Theme.Base ? BaseLogo: context === Theme.HighTechPurple ?purplelogo :hightechredlogo
            } width={70} 
    height={70} alt="logo" />
}