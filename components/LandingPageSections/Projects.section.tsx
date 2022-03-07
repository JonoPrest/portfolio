// Modules
import React, { FC } from "react";

// Components
import CustomButton from "../CustomButton/CustomButton.component";
import ProjectCard from "../ProjectCard/ProjectCard.component";
import Heading1 from "../Typorgraphy/Heading1.component";

const Projects: FC = () => {
  return (
    <section id="projects">
      <Heading1> Projects</Heading1>

      <div className="w-full flex flex-col items-center ">
        <ProjectCard
          imageSrc={
            "https://jonoprest.s3.af-south-1.amazonaws.com/images/this_website_thumbnail.png"
          }
          href="https://github.com/JonoPrest/portfolio"
          title="This Website"
          techArr={[
            "Next.js",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Docker",
            "AWS EC2",
            "AWS S3",
          ]}
          customButton={
            <a
              href="https://github.com/JonoPrest/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <CustomButton round color="transparent">
                View GitHub Repo
              </CustomButton>
            </a>
          }
        >
          The website you are currently looking at is a server side rendered
          Next.js application written in TypeScript and Tailwind CSS. It
          contains an API for managing the email handling on the contact page.
          It is running in a docker container and it is currently being served
          to you via an EC2 instance on AWS. Take a look at the source code on
          GitHub.
        </ProjectCard>
        <ProjectCard
          id="RocketHour-LMS"
          invert
          title="RocketHour LMS"
          imageSrc="https://jonoprest.s3.af-south-1.amazonaws.com/images/rockethour/rockethour_thumbnail.png"
          techArr={[
            "React",
            "Redux",
            "Firebase",
            "Material UI",
            "Google Functions",
            "AWS S3",
            "Python Flask",
          ]}
          href="/projects/RocketHour-LMS"
        >
          I developed a system used by{" "}
          <a
            className="text-blue-600"
            href="https://thinkcamp.co.za/"
            target="_blank"
            rel="noreferrer"
          >
            ThinkCamp.co.za
          </a>
          {`'`}s Online Code Tutoring platform for children and teens called
          &quot;RocketHour&quot;. The RocketHour &quot;LaunchPad&quot; is a
          custom Learning Management System that is geared towards teaching a
          live online class. Students log in and navigate through interactive
          lessons while tutors receive live feedback on their students progress
          throughout the lesson.
        </ProjectCard>

        <ProjectCard
          id="NextInt-Reporting"
          href="/projects/NextInt-Reporting"
          title="Next Integration Reporting System"
          imageSrc="https://jonoprest.s3.af-south-1.amazonaws.com/images/next_int/next_int_thumbnail.png"
          techArr={[
            "Python",
            "Pandas",
            "Reportlab",
            "AWS LAMBDA",
            "AWS SES",
            "AWS S3",
          ]}
        >
          I designed and developed a system for{" "}
          <a
            className="text-blue-600"
            href="http://nextint.co.za/"
            target="_blank"
            rel="noreferrer"
          >
            Next Integration{" "}
          </a>
          that interfaces with a number of machines on a cement mixing plant. It
          queries multiple databases, performs data cleaning, and merges them
          into single dataframe where it gets summariesd. It then gets marked up
          in ReportLab and sent as an attached pdf via email.
        </ProjectCard>
        <ProjectCard
          invert
          id="LHE"
          href="/projects/LHE"
          title="Local Healthy Ethical Ordering Platform"
          imageSrc="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_landing_pg_thumbnail.jpg"
          techArr={["React", "Bootstrap", "Redux", "Firebase", "Express.js"]}
        >
          I designed and developed a platform for{" "}
          <a
            className="text-blue-600"
            href="https://localhealthyethical.co.za/"
            target="_blank"
            rel="noreferrer"
          >
            Local Healthy Ethical{" "}
          </a>
          to automate the collection of members&apos; orders through a sign in
          shop, and for administrators to place orders with distributors. It
          also provides an interface to generate and edit invoices send to
          customers.
        </ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
