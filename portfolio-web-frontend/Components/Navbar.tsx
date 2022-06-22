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
        SetIcon(GetIcon(context))
    },[context])
  return (
      <div className={Styles.ExtendedNavbarContainer}>
        <header className={`${Styles["Navbar-Header"]} ${isSSR?"":Styles[`Navbar-Header-${Theme[context]}`]}`}>
          <div className={Styles.ImageContainer}>{!isSSR && <Link href={"/"} className='Navbar-Icon'>{icon}</Link>}</div>
          <Link className="unstiledLink" href={"Projects"}><a><AlignedText>Projects</AlignedText></a></Link>
          <Link className="unstiledLink" href={"Blog"}><a><AlignedText>Blog</AlignedText></a></Link>
          <Link className="unstiledLink" href={"Skills"}><a><AlignedText>Skills</AlignedText></a></Link>
          <Link className="unstiledLink" href={"About"}><a><AlignedText>About</AlignedText></a></Link>
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
        {(!closeDialog && isPortait)?<DropDownMenu/>:<></>}
      </div>
  );
};
export default Navbar;
