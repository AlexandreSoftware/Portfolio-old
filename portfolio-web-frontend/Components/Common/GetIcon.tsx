import Purplelogo from "/Icons/XandrfDevLogoPurple.svg"
import BaseLogo from "/Icons/XandrfDevLogoBase.svg"
import HightechredLogo from "/Icons/XandrfDevLogoHighTechRed.svg"
import KissLandLogo from "/Icons/XandrfDevLogoKissLand.svg"
import PurplelogoNotext from "/Icons/Notext/XandrfDevLogoPurpleNotext.svg"
import BaseLogoNotext from "/Icons/Notext/XandrfDevLogoBaseNotext.svg"
import HightechredLogoNotext from "/Icons/Notext/XandrfDevLogoRedNotext.svg"
import KissLandLogoNotext from "/Icons/Notext/XandrfDevLogoKissLandNotext.svg"


import { Theme } from "../../utils/ThemeContext"
import { motion } from "framer-motion"
export default function GetIcon(context:Theme,Notext:boolean) {
    
    
    let iconConditional ;
    if(!Notext){
        iconConditional = context== Theme.Base ?
            BaseLogo:
                context == Theme.HighTechPurple ?
                    Purplelogo
                        :context==Theme.HighTechRed ?
                            HightechredLogo
                                :KissLandLogo;
    }
    else{
        iconConditional = context== Theme.Base ?
        BaseLogoNotext:
            context == Theme.HighTechPurple ?
                PurplelogoNotext
                    :context==Theme.HighTechRed ?
                        HightechredLogoNotext
                            :KissLandLogoNotext;
    }
    
    

    return iconConditional
}