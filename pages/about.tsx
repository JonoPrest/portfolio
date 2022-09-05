// Modules
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Components
import Footer from "../components/Footer/Footer.component";
import NavBar from "../components/NavBar/NavBar.component";
import BackButton from "../components/BackButton/BackButton";
import Heading1 from "../components/Typorgraphy/Heading1.component";
import Paragraph from "../components/Typorgraphy/Paragraph.component";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jono Prest</title>
        <meta
          name="description"
          content="Contact page of Jono Prest Software Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <BackButton previousUrl="/" />
      <Heading1>About</Heading1>
      <main className="flex flex-col items-center max-w-6xl mt-8 m-auto bg-white drop-shadow-xl">
        <div className="relative w-full h-128 grow">
          <Image
            src="https://jonoprest.s3.af-south-1.amazonaws.com/images/Jono.jpeg"
            alt="Local Healthy Ethical Landing Page"
            layout="fill"
            objectFit="cover"
            objectPosition="center 40%"
            className="rounded-t-3xl"
          />
        </div>
        <div className="p-10">
          <Paragraph>
            Since I was young I gravitated towards that which is logical,
            mathematical and creative - example. As I grew older, it became
            clear that I had a strong interest in music along with maths,
            science and all things technical.
          </Paragraph>
          <Paragraph className="mt-0">
            My father, who passed away when I was young, had his PhD in
            Electrical Engineering and I was inclined to follow in his
            footsteps. I did very well in maths in matric and was offered an
            entrance scholarship to study Engineering at UCT.
          </Paragraph>
          <Paragraph className="mt-0">
            But… I was simultaneously pushing my own boundaries with music.
            Towards the end of high school I realised that I had a great love
            for working with music and a desire to see how I could grow my skill
            set and figure out what I could do with it. I was also offered an
            entrance scholarship to study a BMus in Jazz Performance at UCT,
            with a focus on trumpet. I chose to follow this journey, knowing I
            would always regret it if I didn’t take this path and pursue it
            fully.
          </Paragraph>
          <Paragraph className="mt-0">
            Since then I’ve worked as a professional musician in many shapes and
            forms. From live performance to studio sessions, from jazz big bands
            to rock and pop outfits. I continue to play with my 5 piece brass
            dance band called “The Nomadic Orchestra” with whom I’ve played for
            many years, toured to many festivals, and played to full-house
            Kirstenbosch audiences. Kirstenbosch audiences.
          </Paragraph>
          <Paragraph className="mt-0">
            I’ve also always found huge meaning and purpose in education. I
            tutored maths and science groups during and after high school, and
            as I developed in my music career after school, I started teaching
            music lessons and directing bands at numerous schools in Cape Town.
            I love breaking down concepts and being involved with people’s
            skills development and growth.
          </Paragraph>
          <Paragraph className="mt-0">
            Along with my performance work, teaching music became a huge part of
            my life and one that I will always treasure. One of the schools I
            worked at, Kronendal Music Academy (KMA), deserves a special
            mention. KMA runs an extra-mural music program, and caters to
            children who would otherwise not have had access to learn music.
            After working as a teacher at KMA for a year and a half, I became
            the Head of Music there. I learnt a lot about management skills in
            this role - being involved in the coordination of over 100 students
            and about 15 staff members.
          </Paragraph>
          <Paragraph className="mt-0">
            I have found all the work I have done since graduating from
            university extremely meaningful, but in the last few years I have
            felt a growing urge to learn more and develop my skill set. I also
            realised that I was looking for more stimulation from a mathematical
            and logical problem solving perspective.
          </Paragraph>
          <Paragraph className="mt-0">
            The initial lockdown in 2020 was a turning point. Up until that
            point I was used to working non-stop from early morning to late
            evening. With schools shutting down and the music industry on pause,
            I suddenly had a lot of extra time in the day. Writing code was
            something that I had been dabbling in over the years, but from then
            on I took every opportunity to work through online courses and teach
            myself various coding technologies.
          </Paragraph>
          <Paragraph className="mt-0">
            I taught myself through project based learning, and at one stage I
            was writing a small application every day and trying to use it as an
            example to practice new concepts in writing code. Over a period of 6
            months I had written over 50 different applications. I then began to
            work on bigger projects with the time that I had - see projects
            page.
          </Paragraph>
          <Paragraph className="mt-0">
            As of 2022 I am fully dedicated to the journey of coding and I am
            focusing my full time on it.
          </Paragraph>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
