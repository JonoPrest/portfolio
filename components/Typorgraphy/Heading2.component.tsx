import React, { FC } from "react";

interface IHeading2Props {
  className?: string;
}

const Heading2: FC<IHeading2Props> = ({ children, className }) => {
  return (
    <h2 className={"relative text-6xl font-medium  leading-tight " + className}>
      {children}
    </h2>
  );
};

export default Heading2;
