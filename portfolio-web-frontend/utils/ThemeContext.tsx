import React, { useEffect, useState } from "react";

export enum Theme{
    Base,
    HighTechred,
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

  return (<ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>);
}