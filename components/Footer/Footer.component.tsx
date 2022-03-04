import Image from "next/image";
import React, { FC } from "react";

import instagram from "../../assets/icons/ph_instagram-logo-fill.svg";
import linkedIn from "../../assets/icons/bi_linkedin.svg";
import envelope from "../../assets/icons/bi_envelope-fill.svg";

const Footer: FC = () => {
  return (
    <footer className="relative bottom-0 static w-full flex flex-col items-center  pb-10">
      <div className="flex justify-center">
        <Image src={instagram} alt="icon" />
        <Image src={linkedIn} alt="icon" />
        <Image src={envelope} alt="icon" />
      </div>
      <p className="p-10 text-gray-400">Jono Prest 2022</p>
    </footer>
  );
};

export default Footer;
