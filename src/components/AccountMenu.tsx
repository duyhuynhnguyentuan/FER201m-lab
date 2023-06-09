
import React from "react";
interface AccountMenuprops{
    visible? :boolean;
}
const AccountMenu:React.FC<AccountMenuprops> = ({
    visible
}) => {
    if(!visible){
        return null;
    }
  return(
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
    <div className="flex flex-col gap-3">
      <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
        <img className="w-8 rounded-md" src="/images/smiley-profile.png" alt="" />
        <p className="text-white text-sm group-hover/item:underline">USERNAME</p>
      </div>
    </div>
    <hr className="bg-gray-600 border-0 h-px my-4" />
    <div  className="px-3 text-center text-white text-sm hover:underline">
      Sign out of Netflix
    </div>
  </div>
  );  
}
export default AccountMenu;