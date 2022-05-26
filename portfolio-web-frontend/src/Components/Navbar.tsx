import * as React from 'react';
import GetIcon from './GetIcon';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../utils/ThemeContext';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    let [context,SetContext] =useContext(ThemeContext)
    const [icon,SetIcon] = useState(GetIcon(context))
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  useEffect(()=>{
        console.log("getting initial icon")
        SetIcon(GetIcon(context))
    },[])
    useEffect(()=>{
        console.log("getting update icon")
        SetIcon(GetIcon(context))
    },[context])
  return (
    <>{icon}</>
  );
};
export default Navbar;
