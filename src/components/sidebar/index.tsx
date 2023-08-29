import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  return (
    <div className="w-[247px] border-borderSidebar border-l min-h-screen">
      <div className="flex gap-2">
        <img src={require("../../assets/images/logo/1.png")} alt="" />
        <h2 className="text-2xl	font-bold ">مدرنیزه</h2>
      </div>
    </div>
  );
};

export default Sidebar;
