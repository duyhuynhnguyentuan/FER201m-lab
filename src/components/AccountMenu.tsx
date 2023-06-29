import { display } from "@mui/system";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
  handleLogOut: () => void;
  photoURL : string;
  displayName: string
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible, handleLogOut, photoURL,displayName }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={photoURL} alt="" />
          <p className="text-white text-sm group-hover/item:underline"> <i className="text-zinc-400">Woa woa</i> {displayName} !</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        className="px-3 text-center text-white text-sm hover:underline"
        onClick={handleLogOut} // Call the handleLogOut function when clicked
      >
        Sign out here!
      </div>
    </div>
  );
};

export default AccountMenu;
