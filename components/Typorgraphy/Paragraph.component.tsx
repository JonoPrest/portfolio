import React, { FC } from "react";

interface IParagraphProps {
  className?: string;
}

const Paragraph: FC<IParagraphProps> = ({ children, className }) => {
  return (
    <p className={"my-8 text-gray-400 text-lg " + className}>{children}</p>
  );
};

export default Paragraph;
