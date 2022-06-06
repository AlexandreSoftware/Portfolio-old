import React, { useEffect, useState } from "react";
import { Theme } from "./ThemeContext";
const OldThemeContext = React.createContext<[Theme,React.Dispatch<React.SetStateAction<Theme>>]>
([Theme.Base, () => {}])

export default OldThemeContext

interface OldThemeContextProps{
  children :any
}

export const OldThemeContextProvider = (props : OldThemeContextProps)=>{
  
  const [theme, setTheme] = useState<Theme>(Theme.Base)

  return (<OldThemeContext.Provider value={[theme, setTheme]}>{props.children}</OldThemeContext.Provider>);
}