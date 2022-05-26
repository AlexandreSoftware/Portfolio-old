import * as React from 'react';
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../utils/ThemeContext';
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
    <>{icon}</>
  );
};
export default Navbar;
