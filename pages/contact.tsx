import type { NextPage } from "next";
import Head from "next/head";
import CustomButton from "../components/CustomButton/CustomButton.component";
import Footer from "../components/Footer/Footer.component";
import FormInput from "../components/FormInput/FormInput.component";
import NavBar from "../components/NavBar/NavBar.component";
import ProjectCard from "../components/ProjectCard/ProjectCard.component";
import SplashImage from "../components/SplashImage/SpalshImage.component";
import { emailMessageRequestData } from "./api/send-email";

type IContactFormEventTargeProps = HTMLInputElement & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
};

const Home: NextPage = () => {
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as IContactFormEventTargeProps;

    const requestBody: emailMessageRequestData = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };

    fetch("api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json)
      .then(console.log)
      .catch(console.error);
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
      <main className="top-0 pb-40">
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
              <CustomButton className="w-20" type="submit">
                Send
              </CustomButton>
            </div>
          </form>
          {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
