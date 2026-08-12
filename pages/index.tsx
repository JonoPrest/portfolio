import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jono Prest</title>
        <meta name="description" content="Jono Prest — new site coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Jono Prest</h1>
        <p className="mt-4 text-lg text-gray-600">
          This site is under construction. A new version is on its way.
        </p>
      </main>
    </div>
  );
};

export default Home;
