import Image from "next/image";
import React, { FC } from "react";

import imageSrc from "./Rectangle 7.png";
import styles from "./ProjectCard.module.css";
import CustomButton from "../CustomButton/CustomButton.component";

interface IProjectCardProps {
  invert?: boolean;
}

const ProjectCard: FC<IProjectCardProps> = ({ invert }) => {
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
        <h1 className="text-5xl font-medium">Project Name</h1>
        <p className="my-8 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ab molestiae exercitationem. Magnam pariatur libero eos eum vel in,
          alias illum veniam fugiat id corporis labore exercitationem dolorum
          magni soluta.
        </p>

        <CustomButton color="transparent" round>
          View Project
        </CustomButton>
      </div>
    </div>
  );
};

export default ProjectCard;
