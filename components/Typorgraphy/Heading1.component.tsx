import React, { FC } from "react";

interface IHeading1Props {
  className?: string;
}

const Heading1: FC<IHeading1Props> = ({ children, className }) => {
  return (
    <div
      className={
        "w-full flex flex-col items-center pt-32 pb-10 text-center " + className
      }
    >
      <h1 className="relative text-5xl font-semibold">{children}</h1>
      <mark className="w-24 border-b-4 border-primary m-4" />
    </div>
  );
};

export default Heading1;
