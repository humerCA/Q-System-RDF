import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="relative flex h-screen w-full select-none">
        <div className="relative bottom-0 top-0 z-50 w-auto">
          <Sidebar />
        </div>

        <div className="flex w-full flex-col pl-[250px]">
          <div className="sticky top-0 z-40 w-full flex-none">
            <Navbar />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="sticky bottom-0 flex-none">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
