import React from "react";
import SidebarMenus from "./UIComponents/SidebarMenus";

// img
import MainLogo from "../images/FINAL - Dark@300x.png";
import MisLogo from "../images/MIS LOGO.png";

const Sidebar = () => {
  return (
    <>
      <div className="customScrollbar flex h-screen w-[250px] flex-1 flex-col justify-between overflow-auto bg-[#25282D] py-5 text-white shadow-lg">
        <div className="flex w-full flex-col space-y-8 ">
          <div className=" sticky px-8 pt-2">
            <img src={MainLogo} alt="Q-System" className="w-44 items-center" />
          </div>
          <SidebarMenus />
        </div>
        <div className="mt-10 flex flex-col items-center">
          <img src={MisLogo} alt="MIS-Logo" className="flex h-auto w-14" />
          <span className="text-center text-[0.5rem] font-normal ">
            Powered By MIS All rights reserved <br />
            Copyrights © 2021
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
