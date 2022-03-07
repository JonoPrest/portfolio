// Modules
import React, { FC } from "react";
import Link from "next/link";

// Comopnents
import CustomButton from "../CustomButton/CustomButton.component";
import SplashImage from "../SplashImage/SpalshImage.component";
import Paragraph from "../Typorgraphy/Paragraph.component";
import Heading2 from "../Typorgraphy/Heading2.component";

const Header: FC = () => {
  return (
    <section
      id="header-section"
      className="flex justify-between w-full flex-col items-end lg:flex-row lg:items-start"
    >
      <div className="w-full px-1 lg:order-1 order-2 xl:ml-20 lg:ml-10 mt-10 lg:mt-32 lg:w-1/3 flex justify-center">
        <div>
          <h5 className="text-primary text-lg">SOFTWARE DEVELOPER</h5>
          <Heading2 className="font-medium  leading-tight text-6xl">
            Hello, my name is Jono Prest
          </Heading2>
          <Paragraph className="max-w-md">
            I am an enthusiastic, passionate and hardworking individual. I am
            stimulated by impactful work and love problem-solving.
          </Paragraph>

          <Paragraph className="max-w-md">
            When I&apos;m not writing code or playing music, you can find me
            adventuring in the outdoors - be it hiking, camping, motorcycling,
            trail running or rock-climbing.
          </Paragraph>

          <div>
            <Link href="/#projects" passHref>
              <CustomButton color="primary">Projects</CustomButton>
            </Link>
            <Link href="/about" passHref>
              <CustomButton className="m-2" color="transparent">
                About
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
      <SplashImage className="order-1" />
    </section>
  );
};

export default Header;
