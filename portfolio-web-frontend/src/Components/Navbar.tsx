import * as React from 'react';
import "./Styles/Navbar.css"
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext, { Theme } from '../utils/ThemeContext';
import AlignedText from './AlignedText';
import ColorPicker from './ColorPicker';
import DropDownMenu from './DropDownMenu';
import { Link } from 'react-router-dom';
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
      <div className="ExtendedNavbarContainer">
        <header className={`Navbar-Header Navbar-Header-${Theme[context]}`}>
          <div className='Navbar-Icon'>{icon}</div>
          <Link className="unstiledLink" to={"Projects"}><AlignedText>Projects</AlignedText></Link>
          <Link className="unstiledLink" to={"Blog"}><AlignedText>Blog</AlignedText></Link>
          <Link className="unstiledLink" to={"Skills"}><AlignedText>Skills</AlignedText></Link>
          <Link className="unstiledLink" to={"About"}><AlignedText>About</AlignedText></Link>
          <ColorPicker closeStateDispatch={SetCloseDialog} closeState={closeDialog}/>
        </header>
        {closeDialog?<></>:<DropDownMenu/>}
      </div>
  );
};
export default Navbar;
