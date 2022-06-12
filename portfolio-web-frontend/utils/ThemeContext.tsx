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

  const [theme, setTheme] = useState<Theme>(newTheme)
  useEffect(()=>{
    let storedTheme =localStorage.getItem("theme")
    newTheme = (Theme[storedTheme as keyof typeof Theme]) 
    setTheme(Theme[storedTheme as keyof typeof Theme]) 

  },[])
  useEffect(()=>{
      let themeString:string = Theme[theme] 
      localStorage.setItem("theme", themeString)  
  },[theme])

  return (<ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>);
}