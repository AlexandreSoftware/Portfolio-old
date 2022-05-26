import React, { useEffect, useState } from "react";

export enum Theme{
    Base,
    HighTechRed,
    HighTechPurple
}
const ThemeContext = React.createContext<[Theme,React.Dispatch<React.SetStateAction<Theme>>]>
([Theme.Base, () => {}])

export default ThemeContext

interface ThemeContextProps{
  children :any
}

export const ThemeContextProvider = (props : ThemeContextProps)=>{
  let themeIndex:Theme = Theme.Base;
  if(typeof window !== 'undefined' &&localStorage){
    let storedTheme =localStorage.getItem("theme")
    themeIndex = (storedTheme== undefined ? Theme.Base : Theme[storedTheme as keyof typeof Theme]) 
    localStorage.setItem("theme",storedTheme== undefined ? "Base" : storedTheme)
    
  }
  const [theme, setTheme] = useState<Theme>(themeIndex)
  return (<ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>);
}