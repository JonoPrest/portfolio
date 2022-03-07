// Modules
import type { NextPage } from "next";
import Head from "next/head";

// Components
import Footer from "../components/Footer/Footer.component";
import NavBar from "../components/NavBar/NavBar.component";

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
      <main className="top-0 pb-40"></main>
      <Footer />
    </div>
  );
};

export default Home;
