// import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Mail from "../Icons/Mail.component";

// import instagram from "../../assets/icons/ph_instagram-logo-fill.svg";
// import linkedIn from "../../assets/icons/bi_linkedin.svg";
// import envelope from "../../assets/icons/bi_envelope-fill.svg";

const Footer: FC = () => {
  return (
    <footer className="relative bottom-0 static w-full flex flex-col items-center mt-10  pb-5">
      {/* <div className="flex justify-center">
        <Image src={instagram} alt="icon" />
        <Image src={linkedIn} alt="icon" />
        <Image src={envelope} alt="icon" />
      </div> */}
      <div className="flex items-center gap-2">
        <Link href="/about">
          <a className="hover:drop-shadow">About</a>
        </Link>
        <span>|</span>
        <Link href="/contact">
          <a className="hover:drop-shadow">Contact</a>
        </Link>
        <a
          className="hover:drop-shadow"
          href="mailto:jjprest@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Mail />
        </a>
      </div>
      <div className="flex ">
        <p className="m-4 text-gray-400">Jono Prest 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
