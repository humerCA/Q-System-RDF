import React from "react";
import InputBox from "./InputBox";

const TableMenus = () => {
  return (
    <>
      <div className="mx-10 mt-2 flex  h-auto w-auto items-center justify-between">
        <div className="space-x-5 text-xs font-medium">
          <button className="h-7 w-20 rounded-lg bg-qsystem shadow-lg">
            ADD
          </button>
          <button className="h-7 w-20 rounded-lg border-[0.5px] border-q-black bg-q-card text-qsystem shadow-md shadow-q-black">
            ARCHIVED
          </button>
        </div>
        <div>
          <InputBox
            className="text-sm text-gray-50"
            labelClass="text-xs text-gray-200"
            placeholder="Search"
            type="text"
            label="Search"
          />
        </div>
      </div>
    </>
  );
};

export default TableMenus;
