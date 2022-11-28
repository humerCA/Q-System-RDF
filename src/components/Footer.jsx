import React from "react";

import { MdSignalWifiStatusbar4Bar, MdSignalWifiOff } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end p-1 px-5 bg-[#25282D] font-medium text-white text-sm">
        <div className="flex content-center ">
          <span className="mr-2 text-[#6D6D6D]">Status:</span>
          {/* {Online ? (
            <MdSignalWifiOff className="mr-2 mt-[0.5]" />
          ) : (
            <MdSignalWifiStatusbar4Bar className="mr-2 mt-1" />
          )} */}
          ONLINE
        </div>
      </div>
    </>
  );
};

export default Footer;
