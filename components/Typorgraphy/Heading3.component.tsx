import React, { FC } from "react";

interface IHeading3Props {
  className?: string;
}

const Heading3: FC<IHeading3Props> = ({ children, className }) => {
  return <h3 className={"text-5xl font-medium " + className}>{children}</h3>;
};

export default Heading3;
