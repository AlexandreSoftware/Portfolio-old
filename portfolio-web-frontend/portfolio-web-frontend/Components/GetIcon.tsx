import purplelogo from "../Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "../Icons/XandrfDevLogoBase.svg"
import HightechredLogo from "../Icons/XandrfDevLogoHighTechRed.svg"
import KissLandLogo from "../Icons/XandrfDevLogoKissLand.svg"
import { Theme } from "../utils/ThemeContext"
export default function GetIcon(context:Theme) {
    return <img src={context== Theme.Base ? BaseLogo.src: context === Theme.HighTechPurple ?purplelogo.src :context===Theme.HighTechRed ? HightechredLogo.src:KissLandLogo.src
            } width={70} 
    height={70} alt="logo" />
}