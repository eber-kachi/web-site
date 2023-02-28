import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-4 lg:px-16 text-white-500 font-semibold rounded bg-green-500 transition-all outline-none hover:bg-white-300 hover:text-green-500 hover:border-green-500" +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
