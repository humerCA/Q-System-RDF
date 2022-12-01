import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="mt-2 flex h-full w-full items-start justify-center ">
        <div className="mx-20 h-auto w-full rounded-xl bg-q-card pt-5 pb-2 shadow-2xl">
          <div className="flex items-center space-x-4 pl-10">
            <FaUserAlt className="text-xl text-q-green " />
            <span className=" font-bold text-qsystem">User Accounts</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
