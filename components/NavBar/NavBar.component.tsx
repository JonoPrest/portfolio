// Modules
import React, { FC, useState } from "react";
import Link from "next/link";

const NavBar: FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 lg:px-20 absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a className="font-semibold text-xl tracking-tight">Jono Prest</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center px-3 py-2 rounded text-black-200 hover:text-gray-400 "
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto justify-end ">
        <div className={"text-sm lg:block" + (expanded ? "" : " hidden")}>
          <Link href="/about">
            <a className="text-lg block mt-4 lg:inline-block lg:mt-0 hover:drop-shadow  hover:border-b border-black mr-4">
              About
            </a>
          </Link>
          <Link href="/#projects">
            <a className="text-lg block mt-4 lg:inline-block lg:mt-0 hover:drop-shadow  hover:border-b border-black mr-4">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-lg block mt-4 lg:inline-block lg:mt-0  hover:border-b border-black hover:drop-shadow">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
