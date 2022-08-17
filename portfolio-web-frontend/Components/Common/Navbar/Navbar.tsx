import * as React from 'react';
import Styles from "./Styles/Navbar.module.css"
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
import NavBarMenu from './NavBarMenu';
interface NavbarProps{
    navbarIntersects : boolean 
}
const Navbar = ( props : NavbarProps) => {
    const [themeContext] =useContext(ThemeContext),
      [languageContext] =useContext(LanguageContext),
      [icon,SetIcon] = useState(GetIcon(Theme.Base,false)),
      [isSSR, setIsSSR] = useState(true),
      [isPortait,SetIsPortait] = useState(false),
      [isIntersecting,SetIsIntersecting] = useState(false),
      intersectingimage = React.useRef<HTMLDivElement>(null);
    const isEnglish = languageContext == Language.EN_US;
    const isPortuguese = languageContext == Language.PT_BR
    useEffect(()=>{
        if(document.scrollingElement && intersectingimage.current && (intersectingimage.current.offsetTop == 0 ) )
          SetIsIntersecting(true)
        SetIcon(GetIcon(themeContext,false))
        setIsSSR(false)
        if (window.innerWidth < 1024) {
          SetIsPortait(true)
        } 
        else if(window.innerWidth > 1024){
          SetIsPortait(false)
        }
        window.onresize= ()=>{
          if (window.innerWidth < 1024) {
            SetIsPortait(true)
          } 
          else if(window.innerWidth > 1024){
            SetIsPortait(false)
          }
        }
        if(props.navbarIntersects){
          window.addEventListener("scroll", handleScroll)
        }
    },[])

    const handleScroll = ()=>{
      console.log(intersectingimage.current?.offsetHeight);
      console.log(document.scrollingElement?.scrollTop)
      if(intersectingimage && intersectingimage.current && intersectingimage.current.offsetTop && (intersectingimage.current!.offsetTop <=  ~~document.scrollingElement!.scrollTop  +100 || intersectingimage.current!.offsetTop == document.scrollingElement!.scrollTop )) {
        if(!isIntersecting){
          SetIsIntersecting(true)
        }
      }
      else{
        console.log("is intersecting") 
        console.log(intersectingimage.current?.offsetTop)
        SetIsIntersecting(false)
      }
    }
    useEffect(()=>{
        SetIcon(GetIcon(themeContext,false))
    },[themeContext])

    
    
  return (
      <div className={Styles.ExtendedNavbarContainer} ref={intersectingimage} > 
          <header id='navbar-header'
          className={`${Styles["Navbar-Header"]} ${isSSR?"":Styles[`Navbar-Header-${Theme[themeContext]}`]}`}>
            
            <AlignedLink href="Projects">
              {isEnglish ? "Projects" : isPortuguese ? "Projetos" : ""} 
            </AlignedLink>
            <AlignedLink href={"Blog"}>
              {isEnglish ? "Blog" : isPortuguese ? "Blog" : ""} 
            </AlignedLink>
            <AlignedLink href={"PlaceHolder"}>
              {isEnglish ? "PlaceHolder" : isPortuguese ? "PlaceHolder" : ""} 
            </AlignedLink>
            <div id="navbar-image-container" className={`${isIntersecting ? Styles.ImageContainerIntersecting :""} ${Styles.ImageContainer}`}>
              {!isSSR && <Link href={"/"} className='Navbar-Icon'>{<img src={icon} />}</Link>}
            </div>
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
export default Navbar;
