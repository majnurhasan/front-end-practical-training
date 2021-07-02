import React from "react";

const Button = ({ primary = false, icon, children, onClick }) => {
  return (
    <button
      type="button"
      className={`flex px-2 py-1 space-x-2 ${
        primary
          ? "text-white bg-green-600 focus:ring-green-400 hover:bg-green-500"
          : "text-gray-800 bg-gray-200 focus:ring-gray-100 hover:bg-gray-300"
      } rounded-md focus:outline-none focus:ring-2 `}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
