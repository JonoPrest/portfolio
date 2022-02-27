import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar/NavBar.component";
import SplashImage from "../components/SplashImage/SpalshImage.component";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jono Prest</title>
        <meta
          name="description"
          content="Landing page of Jono Prest Software Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <SplashImage />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
