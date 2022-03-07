// Modules
import React, { FC } from "react";

interface ICustomTagProps {
  color: "primary" | "gray";
}

const CustomTag: FC<ICustomTagProps> = ({ children, color }) => {
  const bgColor = {
    gray: "bg-gray-400",
    primary: "bg-primary",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-s font-bold leading-none text-white ${bgColor[color]} rounded-full`}
    >
      {children}
    </span>
  );
};

export default CustomTag;
