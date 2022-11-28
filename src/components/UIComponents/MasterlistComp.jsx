import React from "react";
import { Link, NavLink } from "react-router-dom";

const MasterlistComp = () => {
  return (
    <>
      <div className="h-auto w-full bg-q-black ">
        <ul className="space-y-2 py-2">
          <li>
            <NavLink to="masterlist/user-accounts" className="masterlist group">
              User Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/business-operation"
              className="masterlist group"
            >
              Business Operation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/business-model"
              className="masterlist group"
            >
              Business Model
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="masterlist group">
              Order Types
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="masterlist group">
              Product Details
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="masterlist group">
              Type of Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="masterlist group">
              Mode of Payment
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MasterlistComp;
