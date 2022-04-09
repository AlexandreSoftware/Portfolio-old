import Image from "next/image"
import purplelogo from "/Icons/XandrfDevLogoHighTechRed.svg"
import BaseLogo from "/Icons/XandrfDevLogoBase.svg"
import hightechredlogo from "/Icons/XandrfDevLogoPurple.svg"
export default function GetIcon() {
    console.log("test")
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={BaseLogo} width={70} 
    height={70} alt="logo" />
}