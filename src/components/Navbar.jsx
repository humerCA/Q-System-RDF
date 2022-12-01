import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  Logout("/login");
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* <div className="sticky top-0 h-full w-full bg-[#202327] pb-4 text-white">
        <div className="flex items-center justify-between">
          <div className="mt-3 flex">
            <button>
              <GiHamburgerMenu className="ml-3 mb-8 text-2xl text-[#ea7e34]" />
            </button>
            <div className="ml-10 mt-4 flex place-content-center">
              <div className="max-h-full w-1 border-solid bg-[#EA7E34] p-[1px]"></div>
              <span className="pl-3 text-3xl font-extrabold">
                Main Dashboard
              </span>
            </div>
          </div>
          <div className="relative mr-6 mt-4 flex items-center">
            <div>
              <button
                className="flex flex-row"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <div className="flex flex-col text-right">
                  <span className="font-bold">Username</span>
                  <span className="text-xs text-[#EA7E34]">Admin</span>
                </div>
                <div className="ml-2 h-10 w-10 rounded-full border-2 border-gray-600 bg-gray-300"></div>
              </button>
              {menu && (
                <div className="absolute mt-1 h-auto w-full flex-col justify-end space-y-2 rounded-lg bg-q-black-100 px-4 py-4 pl-2 text-sm">
                  <button>User Account</button>
                  <br />
                  <button>Help</button>
                  <br />
                  <button>About</button>
                  <br />
                  <button>Settings</button>
                  <br />
                  <button
                    onClick={() => {
                      Logout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <div className=" top-0 h-full w-full bg-[#202327] pb-4 text-white">
        <div className="flex items-center justify-between">
          <div className="mt-3 flex">
            <button>
              <GiHamburgerMenu className="ml-3 mb-8 text-2xl text-[#ea7e34]" />
            </button>
            <div className="ml-10 mt-4 flex place-content-center">
              <div className="max-h-full w-1 border-solid bg-[#EA7E34] p-[1px]"></div>
              <span className="pl-3 text-3xl font-extrabold">
                Main Dashboard
              </span>
            </div>
          </div>
          <div className="relative mr-6 mt-4 flex items-center">
            <div>
              <button
                className="flex flex-row"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <div className="flex flex-col text-right">
                  <span className="font-bold">Username</span>
                  <span className="text-xs text-[#EA7E34]">Admin</span>
                </div>
                <div className="ml-2 h-10 w-10 rounded-full border-2 border-gray-600 bg-gray-300"></div>
              </button>
              {menu && (
                <div className="absolute mt-1 h-auto w-full flex-col justify-end space-y-2 rounded-lg bg-q-black-100 px-4 py-4 pl-2 text-sm">
                  <button>User Account</button>
                  <br />
                  <button>Help</button>
                  <br />
                  <button>About</button>
                  <br />
                  <button>Settings</button>
                  <br />
                  <button
                    onClick={() => {
                      Logout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
