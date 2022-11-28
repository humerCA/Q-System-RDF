import React from "react";
import { Link, NavLink } from "react-router-dom";

const MasterlistComp = () => {
  return (
    <>
      <div className="w-full bg-q-black">
        <ul className="space-y-2 py-2">
          <li>
            <NavLink to="" className="group ">
              User Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Business Operation
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Business Model
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Order Types
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Product Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Type of Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-xs font-normal text-gray-50 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Mode of Payment
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MasterlistComp;
