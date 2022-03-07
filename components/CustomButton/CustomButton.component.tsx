// Modules
import React, { FC } from "react";

interface ICustomButtonProps {
  color: "primary" | "transparent" | "success" | "failure";
  round?: boolean;
  className?: string;
  [prop: string]: any;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  color,
  round,
  className,
  ...otherProps
}) => {
  const rounded: string = round ? "rounded-full" : "rounded";
  const classNames: string = className || "";

  const bgColor = {
    primary: "bg-primary",
    success: "bg-success",
    failure: "bg-failure",
  };
  const borderColor = {
    primary: "border-primary",
    success: "border-success",
    failure: "border-failure",
  };

  return (
    <>
      {color === "transparent" ? (
        <button
          className={`bg-transparent hover:bg-primary transition font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ${rounded} ${classNames}`}
          {...otherProps}
        >
          {children}
        </button>
      ) : (
        <button
          className={`${bgColor[color]} hover:drop-shadow py-2 px-4 border ${borderColor[color]} ${rounded} ${classNames}`}
          {...otherProps}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CustomButton;
