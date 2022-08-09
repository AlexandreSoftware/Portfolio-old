import * as React from 'react';
import Styles from "./Styles/OldNavbar.module.css"
import GetIcon from '../GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext, { Theme } from '../../../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
import Link from 'next/link';
import ColorPickerButton from './ColorPickerButton';
import { AnimatePresence, motion } from 'framer-motion';
import AlignedLink from './AlignedLink';
import LanguageContext, {Language} from '../../../utils/LanguageContext';
import LanguagePickerButton from './LanguagePickerButton';
import NavBarMenu from './NavBarMenu';
const OldNavbar = () => {
    const [themeContext] =useContext(ThemeContext),
      [languageContext] =useContext(LanguageContext),
      [icon,SetIcon] = useState(GetIcon(Theme.Base)),
      [closeDialog,SetCloseDialog] = useState(false),
      [isSSR, setIsSSR] = useState(true),
      [isPortait,SetIsPortait] = useState(false);
    const isEnglish = languageContext == Language.EN_US;
    const isPortuguese = languageContext == Language.PT_BR
    useEffect(()=>{
        SetIcon(GetIcon(themeContext))
        setIsSSR(false)
        if (window.innerWidth < 1024) {
          SetIsPortait(true)
        } 
        else if(window.innerWidth > 1024){
          SetIsPortait(false)
        }
        window.onresize= ()=>{
          console.log(isPortait)
          if (window.innerWidth < 1024) {
            SetIsPortait(true)
          } 
          else if(window.innerWidth > 1024){
            SetIsPortait(false)
            SetCloseDialog(false)
          }
        }
    },[])
    useEffect(()=>{
      SetCloseDialog(true)
    },[isPortait])
    useEffect(()=>{
        SetIcon(GetIcon(themeContext))
    },[themeContext])
  return (
      <div className={Styles.ExtendedNavbarContainer}>
          <header
          className={`${Styles["Navbar-Header"]} ${isSSR?"":Styles[`Navbar-Header-${Theme[themeContext]}`]}`}>
            <div className={Styles.ImageContainer}>{!isSSR && <Link href={"/"} className='Navbar-Icon'>{<img src={icon} />}</Link>}</div>
            
            <AlignedLink href="Projects">
              {isEnglish ? "Projects" : isPortuguese ? "Projetos" : ""} 
            </AlignedLink>
            <AlignedLink href={"Blog"}>
              {isEnglish ? "Blog" : isPortuguese ? "Blog" : ""} 
            </AlignedLink>
            <AlignedLink href={"Skills"}>
              {isEnglish ? "Skills" : isPortuguese ? "Habilidades" : ""} 
            </AlignedLink>
            <AlignedLink href={"About"}>
              {isEnglish ? "About" : isPortuguese ? "Sobre" : ""} 
            </AlignedLink>
            <div>
              <NavBarMenu/>
            </div>
          </header>
      </div>
  );
};
export default OldNavbar;
