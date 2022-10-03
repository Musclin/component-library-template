import React from "react";

export interface TestButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const TestButton = ({ children, ...otherProps }: TestButtonProps) => {
  return (
    <button
      className="px-4 py-2 text-gray-100 bg-red-600 rounded hover:bg-red-500 hover:text-gray-100"
      {...otherProps}
    >
      {children}
    </button>
  );
};
