// Modules
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// Components
import CustomButton from "../components/CustomButton/CustomButton.component";
import Footer from "../components/Footer/Footer.component";
import FormInput from "../components/FormInput/FormInput.component";
import NavBar from "../components/NavBar/NavBar.component";

// Icons
import Spinner from "../components/Spinner/Spinner.component";
import Tick from "../components/Icons/Tick.component";
import Cancel from "../components/Icons/Cancel.component";

// API funciton calls
import { emailMessageRequestData } from "./api/send-email";

type IContactFormEventTargeProps = HTMLInputElement & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
};

const Home: NextPage = () => {
  const [sendButtonText, setSendButtonText] = useState("Send");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as IContactFormEventTargeProps;

    const requestBody: emailMessageRequestData = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };

    setSendButtonText("Sending...");

    fetch("api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then(() => {
        setSendButtonText("Sent");
        setTimeout(() => {
          setSendButtonText("Send");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setSendButtonText("Failed");
        setTimeout(() => {
          setSendButtonText("Send");
        }, 3000);
      });
  };
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
      <main className="top-0 pb-10">
        <div className="w-full flex flex-col items-center pt-40">
          <h1 className="relative text-5xl font-semibold">Contact me</h1>
          <mark className="w-24 border-b-4 border-primary m-4" />
        </div>
        <div className="flex justify-center w-full p-6">
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-6 w-full max-w-3xl"
          >
            <div className="w-full flex flex-col sm:flex-row gap-6">
              <div className="grow">
                <FormInput
                  label="Name:"
                  inputProps={{
                    id: "name",
                    name: "name",
                    type: "text",
                    required: true,
                  }}
                />
              </div>
              <div className="grow">
                <FormInput
                  label="Email:"
                  inputProps={{
                    id: "email",
                    name: "email",
                    type: "email",
                    required: true,
                  }}
                />
              </div>
            </div>
            <FormInput
              textArea
              label="Message:"
              inputProps={{
                id: "message",
                name: "message",
                required: true,
              }}
            />
            <div className="mt-10 w-full flex justify-center">
              <CustomButton
                color={
                  sendButtonText === "Sent"
                    ? "success"
                    : sendButtonText === "Failed"
                    ? "failure"
                    : "primary"
                }
                className="flex items-center gap-4"
                type="submit"
              >
                {sendButtonText}{" "}
                {sendButtonText === "Sending..." ? (
                  <Spinner />
                ) : sendButtonText === "Sent" ? (
                  <Tick />
                ) : sendButtonText === "Failed" ? (
                  <Cancel />
                ) : null}
              </CustomButton>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
