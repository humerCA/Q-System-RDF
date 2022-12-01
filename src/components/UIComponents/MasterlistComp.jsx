import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const MasterlistComp = () => {
  return (
    <>
      <div className="h-auto w-full bg-q-black ">
        <ul className="-ml-2">
          <li>
            <NavLink to="masterlist/user-accounts" className="masterlist group">
              <FaUserAlt className="svgIcon text-lg" />
              User Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/business-operation"
              className="masterlist group"
            >
              <FaUserAlt className="svgIcon text-lg" />
              Business Operation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/business-model"
              className="masterlist group"
            >
              <FaUserAlt className="svgIcon text-lg" />
              Business Model
            </NavLink>
          </li>
          <li>
            <NavLink to="masterlist/order-types" className="masterlist group">
              <FaUserAlt className="svgIcon text-lg" />
              Order Types
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/product-details"
              className="masterlist group"
            >
              <FaUserAlt className="svgIcon text-lg" />
              Product Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/type-of-payment"
              className="masterlist group"
            >
              <FaUserAlt className="svgIcon text-lg" />
              Type of Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="masterlist/mode-of-payment"
              className="masterlist group"
            >
              <FaUserAlt className="svgIcon text-lg" />
              Mode of Payment
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MasterlistComp;
