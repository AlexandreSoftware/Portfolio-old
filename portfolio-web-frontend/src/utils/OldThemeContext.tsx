import React, { useEffect, useState } from "react";

export enum Theme{
    Base,
    HighTechPurple,
    HighTechRed,
    KissLand
}
const OldThemeContext = React.createContext<[Theme,React.Dispatch<React.SetStateAction<Theme>>]>
([Theme.Base, () => {}])

export default OldThemeContext

interface OldThemeContextProps{
  children :any
}

export const OldThemeContextProvider = (props : OldThemeContextProps)=>{
  let themeIndex:Theme = Theme.Base;
  const [theme, setTheme] = useState<Theme>(themeIndex)
  useEffect(()=>{
    let themeString:string = Theme[theme] 
    localStorage.setItem("theme",theme== undefined ? "Base" : themeString)
  },[theme])
  return (<OldThemeContext.Provider value={[theme, setTheme]}>{props.children}</OldThemeContext.Provider>);
}