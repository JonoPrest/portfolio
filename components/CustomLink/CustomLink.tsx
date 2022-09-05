// Modules
import Link from "next/link";
import React, { FC } from "react";

interface ICustomLinkProps {
  href: string;
  openInNewTab?: boolean;
}

const CustomLink: FC<ICustomLinkProps> = ({ children, href, openInNewTab }) => {
  return (
    <Link href={href}>
      <a
        target={openInNewTab ? "_blank" : ""}
        rel={openInNewTab ? "noreferrer" : ""}
        className="text-blue-600 hover:brightness-150 hover:underline"
      >
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
