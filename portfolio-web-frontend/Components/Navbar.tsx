import * as React from 'react';
import Styles from "./Styles/Navbar.module.css"
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext, { Theme } from '../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
import Link from 'next/link';
import ColorPickerButton from './ColorPickerButton';
import { AnimatePresence, motion } from 'framer-motion';
import AlignedLink from './AlignedLink';
const Navbar = () => {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(Theme.Base))
    const [closeDialog,SetCloseDialog] = useState(false)
    const [isSSR, setIsSSR] = useState(true);
    const [isPortait,SetIsPortait] = useState(false)
    useEffect(()=>{
        SetIcon(GetIcon(context))
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
        SetIcon(GetIcon(context))
    },[context])
  return (
      <div className={Styles.ExtendedNavbarContainer}>
          <header
          className={`${Styles["Navbar-Header"]} ${isSSR?"":Styles[`Navbar-Header-${Theme[context]}`]}`}>
            <div className={Styles.ImageContainer}>{!isSSR && <Link href={"/"} className='Navbar-Icon'>{<img src={icon} />}</Link>}</div>
            
            <AlignedLink href="Projects" >Projects</AlignedLink>
            <AlignedLink href={"Blog"}>Blog</AlignedLink>
            <AlignedLink href={"Skills"}>Skills</AlignedLink>
            <AlignedLink href={"About"}>About</AlignedLink>
            {
              !isPortait ? 
              <div className={Styles.ColorPicker}>
                <ColorPicker/>
              </div>:
              <div className={Styles.ColorButtonPicker}>
                <ColorPickerButton closeStateDispatch={SetCloseDialog} closeState={closeDialog}/>
              </div>
            }
          </header>
        { isPortait &&
          <AnimatePresence exitBeforeEnter>
            {!closeDialog &&<DropDownMenu/>}
          </AnimatePresence>
        }
      </div>
  );
};
export default Navbar;
