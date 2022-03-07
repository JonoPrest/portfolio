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

const NextInt: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jono Prest</title>
        <meta name="description" content="Next Int Reporting Project Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Link href="/#NextInt-Reporting">
        <a className="absolute flex left-6 lg:left-20 top-32 hover:drop-shadow">
          <ChevronLeft />
          <span>BACK</span>
        </a>
      </Link>
      <Heading1>Next Integration Reporting</Heading1>
      <main className="flex flex-col items-center max-w-6xl mt-8 m-auto bg-white drop-shadow-xl">
        <div className="relative flex flex-col lg:flex-row">
          <div className="realtive flex flex-col w-full grow m-10">
            <Paragraph className="mb-0">
              In this project I built and designed an email system, serverless
              data handler and report generator using AWS SES, SNS, LAMBDA and
              S3. The Lambda function was written using Python, Pandas and
              ReportLab.
            </Paragraph>
            <Paragraph className="mb-0">
              The project set out to design and build an integration for a third
              party mining company’s cement mixing process. The various machines
              on the plants were linked up to Ewon modems and they were
              recording data points in isolated databases.
            </Paragraph>
            <Paragraph>
              The integration I built draws data from these individual databases
              and is triggered with an email request. It uses Pandas to isolate
              the requested data and manages data cleaning. It then merges them
              into a single dataframe, creates summaries, and lastly formats it
              into a pdf report using ReportLab. This is sent as an attached pdf
              via email to the required parties.
            </Paragraph>
          </div>
          <div className="relative w-full">
            <div className="relative w-full" style={{ paddingTop: "105%" }}>
              <Image
                src="https://jonoprest.s3.af-south-1.amazonaws.com/images/next_int/next_int_report.png"
                alt="Report Example"
                layout="fill"
                objectFit="contain"
                //   objectPosition="0 20%"
                className="rounded-t-3xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NextInt;
