import { useContext, useState, useEffect } from "react";
import ThemeContext from "../../utils/ThemeContext";
import Style from "./Styles/Card.module.css"

export default function Card() {
    const [context,SetContext] =useContext(ThemeContext)
    const [isSSR, setIsSSR] = useState(true);
    useEffect(()=>{
        setIsSSR(false)
    },[])
    return (
        <div className={Style.CardContainer}>
            <div className={Style.Card}></div>
        </div>
    )
}