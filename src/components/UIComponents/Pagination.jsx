import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = (props) => {
  const { data = [], onLimitChange, onPageChange } = props;

  const limitHandler = (e) => {
    // change the value from number to string 'parseInt'
    onLimitChange(parseInt(e.target.value));
  };

  const nextPageHandler = () => {
    onPageChange((prevValue) => {
      return ++prevValue;
    });
  };

  const prevPageHandler = () => {
    onPageChange((prevValue) => {
      return --prevValue;
    });
  };

  const { current_page = 1, last_page = 1 } = data;

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row items-center justify-end text-sm">
          Items per page:
          <select
            name="pages"
            onChange={limitHandler}
            className="ml-2 h-5 w-14 border-b-[1px] border-gray-700 bg-transparent text-sm text-gray-50 placeholder-transparent focus:border-b-[2.5px] focus:border-qsystem focus:outline-none"
          >
            <option className="bg-q-black hover:bg-q-black">5</option>
            <option className="bg-q-black hover:bg-q-black-100">10</option>
            <option className="bg-q-black hover:bg-q-black-100">15</option>
          </select>
          <span className="px-2">
            Page {current_page} of {last_page}
          </span>
          <button
            disabled={current_page === 1}
            onClick={prevPageHandler}
            className="p-2"
          >
            <AiOutlineLeft />
          </button>
          <button
            disabled={current_page === last_page}
            onClick={nextPageHandler}
            className="p-2"
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
