import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  navLogout("/");
};

const Navbar = () => {
  return (
    <>
      <div className="relative h-full w-full bg-[#202327] text-white">
        <div className="flex items-center justify-between">
          <div className="mt-3 flex">
            <button>
              <GiHamburgerMenu className="ml-3 mb-8 text-2xl text-[#ea7e34]" />
            </button>
            <div className="ml-10 mt-4 flex">
              <div className="max-h-full w-1 border-solid bg-[#EA7E34] p-[1px]"></div>
              <span className="pl-3 text-3xl font-extrabold">
                Main Dashboard
              </span>
            </div>
          </div>
          <button className="mr-6 flex items-center">
            <div className="flex flex-col text-right">
              <span className="font-bold">Username</span>
              <span className="text-xs text-[#EA7E34]">Admin</span>
            </div>
            <div className="ml-2 h-10 w-10 rounded-full border-2 border-gray-600 bg-gray-300"></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
