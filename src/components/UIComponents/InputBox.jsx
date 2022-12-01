import React from "react";

const InputBox = React.forwardRef((props, ref) => {
  const { label, htmlFor, className, containerClass, labelClass, ...rest } =
    props;

  return (
    <>
      <div className="relative mx-2 grow">
        <input
          ref={ref}
          className={` ${className} peer mt-1 h-8 w-full border-b-[1px] border-gray-700 bg-transparent text-base text-gray-50 placeholder-transparent focus:border-b-[2.5px] focus:border-[#EA7E34] focus:outline-none dark:border-gray-500 dark:bg-transparent dark:text-gray-50 dark:focus:border-[#EA7E34]`}
          {...rest}
        />
        <label
          htmlFor={htmlFor}
          className={`${labelClass} pointer-events-none absolute left-0 -top-3.5 text-xs text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600  peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#EA7E34] dark:text-gray-500 dark:peer-placeholder-shown:text-gray-400 dark:peer-focus:text-[#EA7E34]`}
        >
          {label}
        </label>
      </div>
    </>
  );
});
export default InputBox;
