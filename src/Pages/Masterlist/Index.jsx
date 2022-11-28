import React from "react";
import { Outlet } from "react-router";

const Masterlist = () => {
  return (
    <>
      <main className="flex h-full w-full flex-col space-y-5 bg-[#202327] py-5 text-white">
        <Outlet />
      </main>
    </>
  );
};

export default Masterlist;
