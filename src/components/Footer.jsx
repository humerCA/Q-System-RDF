import React, { useEffect, useState } from "react";

import { MdSignalWifiStatusbar4Bar, MdSignalWifiOff } from "react-icons/md";

const Footer = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);

  return (
    <>
      <div className="flex w-full justify-end bg-[#25282D] p-1 px-5 text-sm font-medium text-white">
        <div className="flex items-center ">
          <span className="mr-2 text-[#6D6D6D]">Status:</span>
          {online ? (
            <>
              <MdSignalWifiStatusbar4Bar className="mr-2 -mt-0.5 flex" /> ONLINE
            </>
          ) : (
            <>
              <MdSignalWifiOff className="mr-2 -mt-0.5 flex" /> OFFLINE
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
