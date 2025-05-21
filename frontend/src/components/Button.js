import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
