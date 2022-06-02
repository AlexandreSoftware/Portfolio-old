import * as React from 'react';
import "./Styles/Navbar.css"
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext, { Theme } from '../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(context))
    const [closeDialog,SetCloseDialog] = useState(true)
  useEffect(()=>{
        SetIcon(GetIcon(context))
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
  return (
      <>
        <header className="Navbar-Header">
          <div className='Navbar-Icon'>{icon}</div>
          <AlignedText>Projects</AlignedText>
          <AlignedText>Blog</AlignedText>
          <AlignedText>Skills</AlignedText>
          <AlignedText>About</AlignedText>
          <ColorPicker closeStateDispatch={SetCloseDialog} closeState={closeDialog}/>
        </header>
        {closeDialog?<></>:<DropDownMenu/>}
      </>
  );
};
export default Navbar;
