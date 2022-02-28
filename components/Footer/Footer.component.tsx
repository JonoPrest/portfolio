import Image from "next/image";
import React, { FC } from "react";

import instagram from "../../assets/icons/ph_instagram-logo-fill.svg";
import linkedIn from "../../assets/icons/bi_linkedin.svg";
import envelope from "../../assets/icons/bi_envelope-fill.svg";

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 static w-full border">
      <Image src={instagram} alt="icon" />
      <Image src={linkedIn} alt="icon" />
      <Image src={envelope} alt="icon" />
    </footer>
  );
};

export default Footer;
