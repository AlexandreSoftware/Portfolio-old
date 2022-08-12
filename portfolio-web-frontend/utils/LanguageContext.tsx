import React, { useEffect, useState } from "react";

export enum Language{
    EN_US,
    PT_BR,
}
const LanguageContext = React.createContext<[Language,React.Dispatch<React.SetStateAction<Language>>]>
([Language.EN_US, () => {}])

export default LanguageContext

interface LanguageContextProps{
  children :any
}

export const LanguageContextProvider = (props : LanguageContextProps)=>{  
  let newLanguage : Language = Language.EN_US

  const [languageState, setLanguage] = useState<Language>(newLanguage)
  useEffect(()=>{
    let storedLanguage =localStorage.getItem("Language")
    newLanguage = (Language[storedLanguage as keyof typeof Language]) 
    setLanguage(Language[storedLanguage as keyof typeof Language]) 

  },[])
  useEffect(()=>{
      let LanguageString:string = Language[languageState] 
      localStorage.setItem("Language", LanguageString)  
  },[Language])

  return (<LanguageContext.Provider value={[languageState, setLanguage]}>{props.children}</LanguageContext.Provider>);
}