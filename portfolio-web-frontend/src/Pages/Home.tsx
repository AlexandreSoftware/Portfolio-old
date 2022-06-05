import { useContext, useEffect, useState } from "react"
import GetIcon from "../Components/GetIcon"
import ThemeContext, { Theme } from "../utils/ThemeContext"
import "./Styles/Home.css"
export default function Home() {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(context))
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
    return <div>
        <div className="Home-logo">
            {icon}
            <p className={`Home-paragraph Home-paragraph-${Theme[context]}`}>
            <h1>Welcome to my Portfolio</h1>
                My name is 
                Carlos Alexandre Oliveira Junior
                I’m a .Net/Node Fullstack Developer
                Im currently working as a freelancer developer
                and i’m open to formal work
            </p>
        </div>      
    </div>
}