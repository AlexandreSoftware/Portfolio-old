import React, { useEffect, useState } from "react";

const OldHtmlContext = React.createContext<[Element,React.Dispatch<React.SetStateAction<Element | null>>] | [null,React.Dispatch<React.SetStateAction<Element | null>>]>([null, () => {}])

export default OldHtmlContext

interface OldHtmlContextProps{
  children :any
}

export const OldHtmlContextProvider = (props : OldHtmlContextProps)=>{  

  const [OldHtml, setOldHtml] = useState<Element|null>(null)
  useEffect(()=>{
    setOldHtml(document.body) 
  },[])
  return (<OldHtmlContext.Provider value={[OldHtml, setOldHtml]}>{props.children}</OldHtmlContext.Provider>);
}