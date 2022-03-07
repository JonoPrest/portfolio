// Modules
import React, { FC } from "react";
import Image from "next/image";

// Assets and styling
import svgImage from "./yellow-splash.svg";
import styles from "./SplashImage.module.css";

export interface ISplashImageProps {
  className?: string;
}

const SplashImage: FC<ISplashImageProps> = ({ className }) => {
  return (
    <div className={className + " " + styles.imageContainer}>
      <div className="absolute">
        <Image src={svgImage} alt="Yellow background splash" />
      </div>
      <div className={`${styles.maskImage} `}>
        <Image
          quality={100}
          src={
            "https://jonoprest.s3.af-south-1.amazonaws.com/images/jono_prest_profile_picture.png"
          }
          alt="Profile picture of Jono Prest"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
    </div>
  );
};

export default SplashImage;
