
import { useCallback,useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell} from 'react-icons/bs' ;
import AccountMenu from "./AccountMenu";
import React from "react";
import { Link } from 'react-router-dom'
const Navbar: React.FC = () => {
    const TOP_OFFSET = 66;
    const [showBackground,setshowBackground] = useState(false);
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showAccountMenu,setShowAccountMenu] = useState(false);
    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=> !current);
    },[]);
    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current);
    },[]);
    useEffect(()=>{
        const handleScroll = () => {
           if(window.scrollY >= TOP_OFFSET){
            setshowBackground(true);
           }else{
            setshowBackground(false);
           }
        }
      window.addEventListener('scroll',handleScroll);
      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      }  
    },[])
    return(
       <div>
       <div className="w-full fixed z-40">
      
       <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-150 ${showBackground?'bg-zinc-900 bg-opacity-90':''}`}>
        <img className="h-5 lg:h-7" src="/images/logo.png" alt="logo"/>
       <div className="flex-row ml-8 gap-7 hidden lg:flex" /*on large screen 1024px, displau will be change to flex instead of hidden*/>
        <Link to={`/`}>
        <NavbarItem label="Home"/>
        </Link>
        <NavbarItem label="Series"/>
        <NavbarItem label="Films"/>
        <Link to={`/news`}>
        <NavbarItem label="New & Popular"/>
        </Link>
        <Link to={`/filmsManagement`}>
        <NavbarItem label="Add Film"/>
        </Link>
        
        <NavbarItem label="Browse by languages"/>
       </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative ">
            <p className="text-white text-sm">Browse</p>
            <BsChevronDown className={`text-white transition ${showMobileMenu ?'rotate-180': 'rotate-0'}`}/>
            <MobileMenu visible = {showMobileMenu}/>
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
        <div className="text-gray-200 hover:text-grey-300 cursor-pointer">
        <BsSearch/>
        </div>
        <div className="text-gray-200 hover:text-grey-300 cursor-pointer">
        <BsBell/>
        </div>
        </div>
        <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 relative ml-7">
        <div className="w-8 h-auto overflow-hidden rounded-md">
            <img src="/images/smiley-profile.png" alt="" />
        </div>
        <div className={"text-gray-200 hover:text-grey-300 cursor-pointer"}>
        <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
        </div>
        <AccountMenu visible={showAccountMenu}/>
        </div>
       </div>
       </div> 
       </div>
    )
}
/*  nav
        width : 100%
        position: fix  
        z-index : 40
        */

export default Navbar;