// Modules
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import Footer from "../../components/Footer/Footer.component";
import ChevronLeft from "../../components/Icons/ChevronLeft.componet";
import NavBar from "../../components/NavBar/NavBar.component";
import Heading1 from "../../components/Typorgraphy/Heading1.component";
import Paragraph from "../../components/Typorgraphy/Paragraph.component";

const RocketHour: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jono Prest</title>
        <meta name="description" content="RocketHour LMS Project Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Link href="/#RocketHour-LMS">
        <a className="absolute flex left-6 lg:left-20 top-32 hover:drop-shadow">
          <ChevronLeft />
          <span>BACK</span>
        </a>
      </Link>
      <Heading1>RocketHour LMS</Heading1>
      <main className="flex flex-col items-center max-w-6xl mt-8 m-auto bg-white drop-shadow-xl">
        <div className="relative w-full h-128 grow">
          <Image
            src="https://jonoprest.s3.af-south-1.amazonaws.com/images/rockethour/landing_page.png"
            alt="RocketHour Landing Page"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-t-3xl"
          />
        </div>
        <div className="flex flex-col w-full max-w mt-8">
          <Paragraph className="m-10">
            This application uses React, Redux, Material UI and Firebase. For
            students it provides a sign in system that gives them access to
            their class and lessons. Lessons consist of a series of challenge
            pages which contain checklists of instructions as well as embeds for
            scratch projects, replit terminals, construct games and explanation
            videos, images and gifs.
          </Paragraph>
          <div className="relative w-full" style={{ paddingTop: "57%" }}>
            <Image
              width="500px"
              height="500px"
              src="https://jonoprest.s3.af-south-1.amazonaws.com/images/rockethour/student_lesson_python_replit.png"
              alt="RocketHour Student Lesson With Replit"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w mt-8">
          <Paragraph className="m-10">
            Lessons are taught in classes in real time on Discord by tutors. For
            tutors the LMS provides a live feedback system from the students
            with live progress updates showing which challenge they are on and
            for how long. It also integrates a reporting system where feedback
            is submitted on every lesson and with a message for every student.
            These messages get sent out to parents daily. Tutors can also flag
            students with various alerts and lesson progress is recorded per
            student. API calls are managed and authenticated using serverless
            google functions.
          </Paragraph>
          <div className="relative w-full" style={{ paddingTop: "57%" }}>
            <Image
              width="500px"
              height="500px"
              src="https://jonoprest.s3.af-south-1.amazonaws.com/images/rockethour/tutor_feedback_dashboard.png"
              alt="RocketHour Tutor Feedback Dashboard"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              className="rounded-t-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w mt-8">
          <Paragraph className="m-10">
            Reporting and feedback capturing has been a centerpiece of the
            project as students also submit a simple feedback form after every
            lesson. These tutor and student feedback entries compile into a
            single entry where support managers have alerts for negative
            feedback or flags to be followed up with daily. The stats on student
            progress and flags allow the team to measure student performance
            against every other student who completed the same lesson and can
            quickly help diagnose if a student should be moved up or down a
            level for example. The lesson development team also uses these
            statistics and feedback to adjust lessons until they are at the
            appropriate level.
          </Paragraph>
          <div className="relative w-full" style={{ paddingTop: "30%" }}>
            <Image
              width="500px"
              height="500px"
              src="https://jonoprest.s3.af-south-1.amazonaws.com/images/rockethour/student_feedback.png"
              alt="RocketHour Student Feedback Example"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              className="rounded-3xl"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RocketHour;
