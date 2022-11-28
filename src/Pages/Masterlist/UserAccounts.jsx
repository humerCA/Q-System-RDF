import React from "react";
import TableMenus from "../../components/UIComponents/TableMenus";
import { FaUserAlt } from "react-icons/fa";

const UserAccounts = () => {
  return (
    <>
      <div className="mt-5 flex h-full items-start justify-center shadow-2xl">
        <div className="max-w-4xl rounded-xl bg-q-card py-5  shadow-2xl">
          <div className="flex items-center space-x-4 pl-10">
            <FaUserAlt className="text-xl text-q-green " />
            <span className=" font-medium text-qsystem">User Accounts</span>
          </div>
          <TableMenus />
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-left text-xs text-gray-500">
              <thead className="bg-q-card text-xs uppercase text-gray-700">
                <tr className="max-w-2xl border-b-2 border-qsystem">
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">FIRSTNAME</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">LASTNAME</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">USER ROLE</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">USERNAME</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">STATUS</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center">DATE CREATED</div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="flex items-center">ACTIONS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-q-card dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="dark:text-q-cabg-q-card whitespace-nowrap py-4 px-6 font-medium text-gray-50"
                  >
                    0001
                  </th>
                  <td className="py-4 px-6">Sliver</td>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">$2999</td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b bg-q-card dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="dark:text-q-cabg-q-card whitespace-nowrap py-4 px-6 font-medium text-gray-50"
                  >
                    0002
                  </th>
                  <td className="py-4 px-6">White</td>
                  <td className="py-4 px-6">Laptop PC</td>
                  <td className="py-4 px-6">$1999</td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-q-card dark:bg-gray-800">
                  <th
                    scope="row"
                    className="dark:text-q-cabg-q-card whitespace-nowrap py-4 px-6 font-medium text-gray-50"
                  >
                    00003
                  </th>
                  <td className="py-4 px-6">Black</td>
                  <td className="py-4 px-6">Accessories</td>
                  <td className="py-4 px-6">$99</td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
