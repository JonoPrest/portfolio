import React, { FC } from "react";

interface ICustomButtonProps {
  color?: "primary" | "transparent";
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
  const selectedColor: string = color || "primary";
  const rounded: string = round ? "rounded-full" : "rounded";
  const classNames: string = className || "";
  return (
    <>
      {selectedColor === "primary" ? (
        <button
          className={`bg-primary hover:drop-shadow py-2 px-4 border border-primary ${rounded} ${classNames}`}
          {...otherProps}
        >
          {children}
        </button>
      ) : (
        <button
          className={`bg-transparent hover:bg-primary transition font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent ${rounded} ${classNames}`}
          {...otherProps}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CustomButton;
