  import Image from "next/image"
import purplelogo from "/Icons/XandrfDevLogoHighTechRed.svg"
import BaseLogo from "/Icons/XandrfDevLogoBase.svg"
import hightechredlogo from "/Icons/XandrfDevLogoPurple.svg"
import { useContext } from "react"
import ThemeContext, { Theme } from "../utils/ThemeContext"
export default function GetIcon() {
    let [context,] =useContext(ThemeContext)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={context== Theme.Base ? 
              BaseLogo 
              : context == Theme.HighTechPurple ? 
                purplelogo :
                  hightechredlogo
            
            } width={70} 
    height={70} alt="logo" />
}