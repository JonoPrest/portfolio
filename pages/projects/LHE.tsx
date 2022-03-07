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
        <meta
          name="description"
          content="Local Healthy Ethical Ordering Platform Project Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Link href="/#LHE">
        <a className="absolute flex left-6 lg:left-20 top-32 hover:drop-shadow">
          <ChevronLeft />
          <span>BACK</span>
        </a>
      </Link>
      <Heading1>Local Healthy Ethical</Heading1>
      <main className="flex flex-col items-center max-w-6xl mt-8 m-auto bg-white drop-shadow-xl">
        <div className="relative w-full h-128 grow">
          <Image
            src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_landing_page.jpg"
            alt="Local Healthy Ethical Landing Page"
            layout="fill"
            objectFit="cover"
            objectPosition="center 20%"
            className="rounded-t-3xl"
          />
        </div>
        <div className="flex flex-col w-full max-w mt-8">
          <Paragraph className="m-10">
            In this project I designed and built an ordering platform for{" "}
            <a
              className="text-blue-600"
              href="https://localhealthyethical.co.za/"
              target="_blank"
              rel="noreferrer"
            >
              Local Healthy Ethical{" "}
            </a>{" "}
            food club. The platform uses React, Bootstrap, Redux and Firebase in
            the tech stack.
          </Paragraph>
          <div className="flex gap-5 px-10">
            <div className="relative w-1/2" style={{ paddingTop: "48%" }}>
              <Image
                width="500px"
                height="500px"
                src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_shop.jpg"
                alt="Local Healthy Ethical Shop Page"
                layout="fill"
                objectFit="cover"
                objectPosition="center "
                className="rounded-3xl"
              />
            </div>
            <div className="relative w-1/2" style={{ paddingTop: "48%" }}>
              <Image
                width="500px"
                height="500px"
                src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_baked_goods.png"
                alt="Local Healthy Ethical Baked Goods"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w mt-8">
          <Paragraph className="m-10">
            Users can sign in and place orders on the platform. These orders are
            collected and mapped in an administrative dashboard where they get
            grouped and emailed off to the various distributers associated with
            the foodclub.
          </Paragraph>
          <div className="relative w-full" style={{ paddingTop: "50%" }}>
            <Image
              width="500px"
              height="500px"
              src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_master_sheet.png"
              alt="RocketHour Tutor Feedback Dashboard"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-t-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col w-full max-w my-8 ">
          <Paragraph className="m-10">
            Once orders are complete and all collections/deliveries have
            happened. There is an interface for generating and editing invoices
            for customers and sending them.
          </Paragraph>
          <div className="flex gap-5 px-10">
            <div className="relative w-1/2" style={{ paddingTop: "48%" }}>
              <Image
                width="500px"
                height="500px"
                src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_editable_invoice.png"
                alt="Local Healthy Ethical Shop Page"
                layout="fill"
                objectFit="cover"
                objectPosition="center "
                className="rounded-3xl"
              />
            </div>
            <div className="relative w-1/2" style={{ paddingTop: "48%" }}>
              <Image
                width="500px"
                height="500px"
                src="https://jonoprest.s3.af-south-1.amazonaws.com/images/lhe/lhe_all_invoices.png"
                alt="Local Healthy Ethical Baked Goods"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RocketHour;
