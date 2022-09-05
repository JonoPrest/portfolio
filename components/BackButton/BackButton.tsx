// Modules
import Link from "next/link";
import React, { FC } from "react";
import ChevronLeft from "../Icons/ChevronLeft.componet";

interface IBackButtonProps {
  previousUrl: string;
}

const BackButton: FC<IBackButtonProps> = ({ previousUrl }) => {
  return (
    <Link href={previousUrl}>
      <a className="relative mb-8 flex ml-6 lg:left-20 top-32 hover:drop-shadow">
        <ChevronLeft />
        <span>BACK</span>
      </a>
    </Link>
  );
};

export default BackButton;
