import React from "react";
import InputBox from "./InputBox";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router";

const TableMenus = (props) => {
  const { href, onSearch, onStatusChange, onPageChange } = props;

  const navigate = useNavigate();

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
      onPageChange(1);
    }
  };

  const statusHandler = () => {
    onStatusChange((prevValue) => {
      if (prevValue === "active") {
        return "deactivated";
      }
      return "active";
    });
  };

  // const archived = () => ({

  // })

  return (
    <>
      <div className="mx-12 flex flex-row items-center justify-between pt-2">
        <div className="flex items-center space-x-5 text-xs font-medium">
          <button
            className="h-7 w-20 rounded-lg bg-qsystem shadow-lg"
            onClick={() => {
              navigate(href);
            }}
          >
            ADD
          </button>
          <button
            className="h-7 w-20 rounded-lg border-[0.5px] border-q-black bg-q-card text-qsystem shadow-md shadow-q-black"
            onClick={statusHandler}
          >
            ARCHIVED
          </button>
        </div>
        <div className="flex items-center">
          <ImSearch className="mt-1 text-sm" />
          <InputBox
            onKeyPress={searchHandler}
            className="text-sm"
            placeholder="Search"
            type="text"
            label="Search"
            labelClass=""
          />
        </div>
      </div>
    </>
  );
};

export default TableMenus;
