import React from "react";
import { Link } from 'react-router-dom'
interface MobileMenuProps{
    visible?:boolean
}
const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible){
       
        return null;
    }
   
    return(
        <div className="bg-black w-56 absolute top-8 left-0 py-5  flex-col border-2 border-grey-800 flex animate-pulse">
            <div className="flex flex-col gap-4">
            <Link to={`/`}>
            <div className="px-3 text-center text-white hover:underline">
                Home
            </div>
            </Link>
            <div className="px-3 text-center text-white hover:underline">
                Series
            </div>
            <div className="px-3 text-center text-white hover:underline">
                Films
            </div>
            <div className="px-3 text-center text-white hover:underline" >
                News & popular
            </div>
            <div className="px-3 text-center text-white hover:underline" >
                My list
            </div>
            <div className="px-3 text-center text-white hover:underline" >
                Browse by languages
            </div>
            </div>
        </div>
    )
}
export default MobileMenu;