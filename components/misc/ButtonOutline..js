import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 sm:mx-0 px-5 sm:px-8 border border-black-900 text-black-900 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-black-900 hover:text-white-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
