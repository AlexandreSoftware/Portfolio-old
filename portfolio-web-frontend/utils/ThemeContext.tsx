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
  const [theme, setTheme] = useState<Theme>(Theme.Base)
  useEffect(()=>{       
    let theme =localStorage.getItem("theme")
    let themeindex = (theme == undefined ? "Base" : theme) as unknown as Theme
    console.log(themeindex)
    localStorage.setItem("theme",theme == undefined ? "Base" : theme)
    setTheme(themeindex)
  },[])
  return (<ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>);
}