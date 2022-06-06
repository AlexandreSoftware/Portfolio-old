import * as React from 'react';
import Styles from "./Styles/Navbar.module.css"
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext, { Theme } from '../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
import Link from 'next/link';
const Navbar = () => {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(Theme.Base))
    const [closeDialog,SetCloseDialog] = useState(true)
    const [isSSR, setIsSSR] = useState(true);
useEffect(()=>{
        SetIcon(GetIcon(context))
        setIsSSR(false)
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
  return (
      <div className={Styles.ExtendedNavbarContainer}>
        <header className={`${Styles["Navbar-Header"]} ${isSSR?"":Styles[`Navbar-Header-${Theme[context]}`]}`}>
          {!isSSR && <Link href={"/"} className='Navbar-Icon'>{icon}</Link>}
          <Link className="unstiledLink" href={"Projects"}><AlignedText>Projects</AlignedText></Link>
          <Link className="unstiledLink" href={"Blog"}><AlignedText>Blog</AlignedText></Link>
          <Link className="unstiledLink" href={"Skills"}><AlignedText>Skills</AlignedText></Link>
          <Link className="unstiledLink" href={"About"}><AlignedText>About</AlignedText></Link>
          <ColorPicker closeStateDispatch={SetCloseDialog} closeState={closeDialog}/>
        </header>
        {closeDialog?<></>:<DropDownMenu/>}
      </div>
  );
};
export default Navbar;
