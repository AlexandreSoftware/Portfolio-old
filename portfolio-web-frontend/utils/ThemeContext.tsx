import React, { useEffect, useState } from "react";

export enum Theme{
    Base,
    HighTechPurple,
    HighTechRed,
    KissLand
}
const ThemeContext = React.createContext<[Theme,React.Dispatch<React.SetStateAction<Theme>>]>
([Theme.Base, () => {}])

export default ThemeContext

interface ThemeContextProps{
  children :any
}

export const ThemeContextProvider = (props : ThemeContextProps)=>{  
  let newTheme = Theme.Base
  let counter = 0
  const [theme, setTheme] = useState<Theme>(newTheme)
  useEffect(()=>{
    let storedTheme =localStorage.getItem("theme")
    
    newTheme = (storedTheme== undefined ? Theme.Base : Theme[storedTheme as keyof typeof Theme]) 
    setTheme(storedTheme== undefined ? Theme.Base : Theme[storedTheme as keyof typeof Theme]) 
  },[])
  useEffect(()=>{
      let themeString:string = Theme[newTheme] 
      localStorage.setItem("theme",newTheme== undefined ? "Base" : themeString)  
  },[newTheme])

  return (<ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>);
}