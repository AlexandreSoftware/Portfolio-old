import purplelogo from "../Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "../Icons/XandrfDevLogoBase.svg"
import HightechredLogo from "../Icons/XandrfDevLogoHighTechRed.svg"
import KissLandLogo from "../Icons/XandrfDevLogoKissLand.svg"
import { Theme } from "../utils/ThemeContext"
export default function GetIcon(context:Theme) {
    console.log("contexto")
    return <img src={context== Theme.Base ? BaseLogo: context === Theme.HighTechPurple ?purplelogo :context===Theme.HighTechRed ? HightechredLogo:KissLandLogo
            } width={70} 
    height={70} alt="logo" />
}