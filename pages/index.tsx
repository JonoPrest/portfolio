// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import Footer from "../components/Footer/Footer.component";
import NavBar from "../components/NavBar/NavBar.component";
import HeaderSection from "../components/LandingPageSections/Header.section";
import TechSection from "../components/LandingPageSections/Tech.sections";
import ProjectsSection from "../components/LandingPageSections/Projects.section";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jono Prest</title>
        <meta
          name="description"
          content="Landing page of Jono Prest Software Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="s top-0 pb-40">
        <HeaderSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
