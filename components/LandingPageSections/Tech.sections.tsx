// Modules
import React, { FC } from "react";

// Comopnents
import CustomTag from "../CustomTag/CustomTag.component";

const Tech: FC = () => {
  return (
    <section
      id="tech-section"
      className="w-full  flex  justify-center lg:justify-start"
    >
      <div className="max-w-4xl mt-20 xl:ml-20 lg:ml-10 px-2">
        <h5 className="text-gray-400 font-bold">TECH I&apos;M USING</h5>
        <div className="my-4 flex flex-wrap gap-1">
          {[
            "React",
            "Redux",
            "TypeScript",
            "Solidity",
            "Rescript",
            "JavaScript",
            "Foundry",
            "Hardhat",
            "HTML",
            "CSS/SCSS",
            "Next.js",
            "Node.js",
            "Express.js",
            "Python",
            "Flask",
            "Pandas",
            "ReportLab",
            "Material UI",
            "Tailwind CSS",
            "Bootstrap",
            "AWS EC2",
            "Lambda",
            "S3",
            "CloudFront",
            "SES",
            "SNS",
            "Elastic Beanstalk",
            "Heroku",
            "Docker",
            "Firebase",
            "Firestore",
            "Realtime DB",
            "Firebase Authentication",
            "SQL",
            "GraphQL",
            "Google Cloud Functions",
            "Webpack",
            "Parcel",
            "Git",
          ].map((item, i) => (
            <CustomTag color="gray" key={i}>
              {item}
            </CustomTag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
