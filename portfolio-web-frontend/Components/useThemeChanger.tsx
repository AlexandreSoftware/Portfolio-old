import { useState, useEffect, useContext } from "react";
import ThemeContext, { Theme }  from "../utils/ThemeContext";

export default function useThemeChanger(){
    let [theme,SetTheme] = useContext(ThemeContext)
    useEffect(()=>{
        let theme = localStorage.getItem("theme");
        console.log("passed")
        console.log(theme)
        let themeindex = (theme==undefined? "Base":theme )as keyof typeof Theme
        SetTheme([themeindex,SetTheme])
    },[])
      
}