import * as React from 'react';
import "./Styles/Navbar.css"
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    let [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(context))

  useEffect(()=>{
        SetIcon(GetIcon(context))
    },[])
    useEffect(()=>{
        SetIcon(GetIcon(context))
    },[context])
  return (
      <>
        <header className='Navbar-Header'>
          <div className='Navbar-Icon'>{icon}</div>
          <AlignedText>Projects</AlignedText>
          <AlignedText>Blog</AlignedText>
          <AlignedText>Skills</AlignedText>
          <AlignedText>About</AlignedText>
          <ColorPicker/>
        </header>
        <DropDownMenu/>
      </>
  );
};
export default Navbar;
