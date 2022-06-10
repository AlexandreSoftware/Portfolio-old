import { useContext, useState, useEffect } from "react";
import GetIcon from "../Components/GetIcon";
import ThemeContext, { Theme } from "../utils/ThemeContext";
import Style from "./Styles/About.module.css"
export default function About() {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(Theme.Base))
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        SetIcon(GetIcon(context))
        setIsSSR(false)
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
    return (
        <div className={Style.About}>
            {!isSSR && icon}    
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lacus, eget dictum sit. Quam lacus, dignissim proin habitasse pretium. Quam id nunc, senectus egestas mi est at in neque. Nibh in amet, nisi ut nisi congue dolor consectetur. Semper eget tincidunt at mi fames egestas venenatis.
            </p>
        </div>
    )
}