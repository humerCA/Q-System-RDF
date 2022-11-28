import React, { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineProfile } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { RiFileList2Fill } from "react-icons/ri";
import Rewards from "../../images/Icons/Rewards.svg";

import MasterlistComp from "./MasterlistComp";

import { Link, NavLink } from "react-router-dom";

const SidebarMenus = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex w-full ">
        <ul className="flex w-full flex-col text-sm [&>*]:pl-10 ">
          <NavLink to="/" className="navLink group">
            <MdOutlineDashboard className="svgIcon" />
            Dashboard
          </NavLink>

          <NavLink
            to="/masterlist"
            className="navLink group "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <RiFileList2Line className="svgIcon" />
            Masterlist
          </NavLink>

          {open && <MasterlistComp />}

          <NavLink to="/store" className="navLink group">
            <FaStoreAlt className="svgIcon" />
            Store
          </NavLink>

          <NavLink to="/members" className="navLink group">
            <FaUserCircle className="svgIcon" />
            Members
          </NavLink>

          <NavLink to="/reports" className="navLink group">
            <TbReportAnalytics className="svgIcon" />
            Reports
          </NavLink>

          <NavLink to="/history" className="navLink group">
            <AiOutlineProfile className="svgIcon" />
            History Logs
          </NavLink>

          <NavLink to="/data-migration" className="navLink group">
            <FaFileImport className="svgIcon" />
            Data Migration
          </NavLink>

          <NavLink to="/activitylogs" className="navLink group">
            <RiFileList2Fill className="svgIcon" />
            Activity Logs
          </NavLink>

          <NavLink to="rewards" className="navLink group">
            <img src={Rewards} className="svgIcon" />
            Reward Points
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default SidebarMenus;
