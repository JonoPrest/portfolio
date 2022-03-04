import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer.component";
import NavBar from "../components/NavBar/NavBar.component";
import ProjectCard from "../components/ProjectCard/ProjectCard.component";
import SplashImage from "../components/SplashImage/SpalshImage.component";

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
        {/* Header */}
        <section
          id="header-section"
          className="  flex justify-between w-full flex-col items-end lg:flex-row lg:items-start"
        >
          <div className="w-full px-1 lg:order-1 order-2 xl:ml-20 lg:ml-10 mt-32 lg:w-1/3 flex justify-center">
            <div>
              <h5 className="text-primary text-lg">DEVELOPER</h5>
              <h1 className="font-medium  leading-tight text-6xl">
                Hello, my name is Jono Prest
              </h1>
              <p className="max-w-md my-6 text-gray-400 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                quisquam porro neque sint veritatis similique cumque. Eveniet
                nobis nihil blanditiis minima commodi illo dolorum, maxime
                molestiae repellat voluptatibus, obcaecati quae!
              </p>
              <div>
                <button className="bg-primary hover:drop-shadow py-2 px-4 border border-primary rounded">
                  Projects
                </button>
                <button className="m-2 bg-transparent hover:bg-primary transition font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded tra">
                  Linked In
                </button>
              </div>
            </div>
          </div>
          <SplashImage className="order-1" />
        </section>
        {/* Projects */}
        <section id="projects">
          <div className="w-full flex flex-col items-center py-40">
            <h1 className="relative text-5xl font-semibold">Projects</h1>
            <mark className="w-24 border-b-4 border-primary m-4" />
          </div>
          <div className="w-full flex flex-col items-center ">
            <ProjectCard />
            <ProjectCard invert />
            <ProjectCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
