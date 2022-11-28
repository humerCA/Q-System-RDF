import React from "react";

const Dashboard = () => {
  return (
    <>
      <main className="flex h-full w-full flex-col space-y-5 bg-[#202327] py-5 text-white">
        <div className="flex px-24 font-bold">
          <div className="h-6 max-h-full w-1 items-center border-solid bg-gray-700 p-[1px]"></div>
          <span className="ml-3 text-[#EA7E34]">OVERVIEW</span>
        </div>
        <section className="mx-14 mt-10 flex flex-row items-center justify-center ">
          <div className="flex flex-row items-center space-x-4">
            <div className="h-80 w-56 rounded-xl bg-[#282B30] shadow-lg"></div>
            <div className="h-80 w-80 rounded-xl bg-[#282B30] shadow-lg"></div>
            <div className="space-y-4">
              <div className="h-40 w-56 rounded-xl bg-[#282B30] shadow-lg"></div>
              <div className="h-40 w-56 rounded-xl bg-[#282B30] shadow-lg"></div>
            </div>
          </div>
        </section>
        <section className="mx-14 flex flex-row items-center justify-center ">
          <div className="flex flex-row items-center space-x-4">
            <div className="h-52 w-72 rounded-xl bg-[#282B30] shadow-lg"></div>
            <div className="h-52 w-72 rounded-xl bg-[#282B30] shadow-lg"></div>
            <div className="space-y-4"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
