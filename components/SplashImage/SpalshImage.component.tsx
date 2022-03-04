import Image from "next/image";
import React, { FC } from "react";

import svgImage from "./yellow-splash.svg";
import profilePic from "./place-holder.png";
import styles from "./SplashImage.module.css";

export interface ISplashImageProps {
  className?: string;
}

const SplashImage: FC<ISplashImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="absolute">
        <Image src={svgImage} alt="Yellow background splash" />
      </div>
      <div className={`${styles.maskImage} `}>
        <Image
          quality={100}
          src={profilePic}
          alt="Profile picture of Jono Prest"
        />
      </div>
    </div>
  );
};

export default SplashImage;
