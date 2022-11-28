import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Dashboard from "../Pages/Dashboard";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="flex select-none flex-row">
        <div className="z-50 h-screen">
          <Sidebar />
        </div>

        <div className="flex h-screen w-full flex-col">
          <div className="flex-none">
            <Navbar />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
          <div className="flex-none">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
