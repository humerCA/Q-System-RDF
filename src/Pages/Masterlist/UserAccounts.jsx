import React, { useState } from "react";
import TableMenus from "../../components/UIComponents/TableMenus";
import { NavLink } from "react-router-dom";
import moment from "moment";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TiExport } from "react-icons/ti";

// Pagination
import Pagination from "../../components/UIComponents/Pagination";

// RTK
// MockAPI
// import { useGetUserAccountsQuery } from "../../Redux/Query/apiSlice";
// Q-System
import { useGetUserAccountsApiQuery } from "../../Redux/Query/UserAccountsApi";

const UserAccounts = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("active");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: users,
    isLoading: userLoading,
    isSuccess: usersSuccess,
  } = useGetUserAccountsApiQuery({
    page: page,
    limit: limit,
    status: status,
    search: search,
  });

  return (
    <>
      <div className="mt-2 flex h-full w-full items-start justify-center ">
        <div className="mx-20 h-auto w-full rounded-xl bg-q-card pt-5 pb-2 shadow-2xl">
          <div className="flex items-center space-x-4 pl-10">
            <FaUserAlt className="text-xl text-q-green " />
            <span className=" font-bold text-qsystem">User Accounts</span>
          </div>
          <TableMenus
            href="/masterlist/users-accounts/add-users"
            onSearch={setSearch}
            onStatusChange={setStatus}
            onPageChange={setPage}
          />
          <div className="flex h-full w-full justify-center">
            <div className="customScrollbar mx-10 w-full  overflow-x-auto shadow-md">
              <table className="w-full text-left text-xs text-gray-50 ">
                <thead className="w-full bg-q-card text-center text-xs uppercase text-neutral-500 ">
                  <tr className="w-full max-w-2xl border-b-2 border-qsystem text-neutral-500 ">
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>FIRSTNAME</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>LASTNAME</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>USER ROLE</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>USERNAME</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>STATUS</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <div>DATE CREATED</div>
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <span>ACTIONS</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersSuccess &&
                    users.data.map((users) => {
                      return (
                        <tr
                          key={users.id}
                          className="bg-q-card uppercase text-gray-50 hover:bg-q-black-100"
                        >
                          <th
                            scope="row"
                            className="whitespace-nowrap py-3 px-6 text-center font-medium text-gray-50"
                          >
                            {users.id}
                          </th>
                          <td className="tBorderLeft pl-4">
                            {users.firstname}
                          </td>
                          <td className="tBorderLeft pl-4">{users.lastname}</td>
                          <td className="tBorderLeft text-center">
                            {users.role}
                          </td>
                          <td className="tBorderLeft pl-4 lowercase">
                            {users.username}
                          </td>
                          <td
                            className={
                              users.status
                                ? "tBorderLeft text-center text-q-green"
                                : "tBorderLeft text-center text-red-600"
                            }
                          >
                            {users.status ? "ACTIVE" : "EXPIRED"}
                          </td>
                          <td className="tBorderLeft text-center">
                            {moment(users.created_at).format("MM DD YYYY")}
                          </td>
                          <td className="tBorderLeft flex items-center justify-center py-3 px-6 text-right">
                            <button>
                              <BiDotsVerticalRounded className="text-xl" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="my-5 mb-1 flex items-center justify-between px-12">
            <button className="flex items-center">
              <TiExport className="-mt-1 text-2xl" />
              <span className="text-s pl-1 font-bold">IMPORT</span>
            </button>
            <Pagination
              onLimitChange={setLimit}
              data={users}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccounts;
