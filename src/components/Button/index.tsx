import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-background-default text-primary-main p-md p-lg rounded-md font-weight-medium border border-gray-100 cursor-pointer">
      {children}
    </button>
  );
}
