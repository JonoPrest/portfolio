// Modules
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import CustomButton from "../CustomButton/CustomButton.component";

// Assets and styling
import styles from "./ProjectCard.module.css";
import CustomTag from "../CustomTag/CustomTag.component";

interface IProjectCardProps {
  imageSrc: any;
  title: string;
  href?: string;
  customButton?: ReactNode;
  invert?: boolean;
  techArr?: Array<string>;
}

const ProjectCard: FC<IProjectCardProps> = ({
  invert,
  imageSrc,
  href,
  children,
  customButton,
  title,
  techArr,
}) => {
  return (
    <div
      className={
        "bg-white drop-shadow-xl w-full  h-256 my-10 flex flex-col items-center lg:w-11/12 lg:h-128 lg:flex-row  max-h-screen rounded-3xl " +
        styles.projectCardContainer
      }
    >
      <div
        className={
          "order-1 relative w-full h-full grow" + (invert ? " lg:order-3" : "")
        }
      >
        <Image
          src={imageSrc}
          layout="fill"
          alt="project picture"
          className={
            styles.projectCardImg +
            (invert ? " lg:rounded-r-3xl" : " lg:rounded-l-3xl")
          }
        />
      </div>
      <div className="order-2 w-full h-full p-10 flex flex-col justify-center items-start grow">
        <h1 className="text-5xl font-medium">{title}</h1>
        {techArr && (
          <div className="mt-8 flex flex-wrap gap-2">
            <h5 className="text-gray-400 font-bold">TECH:</h5>
            {techArr.map((item, i) => (
              <CustomTag key={i} color="primary">
                {item}
              </CustomTag>
            ))}
          </div>
        )}
        <p className="my-8 text-gray-400 text-lg">{children}</p>
        {customButton ? (
          customButton
        ) : (
          <Link href={href || "/"} passHref>
            <CustomButton color="transparent" round>
              View Project
            </CustomButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
