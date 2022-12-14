import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

//Imagenes

import AvnetImg from "../public/img/brands/Avnet.png";
import EyeqImg from "../public/img/brands/Eyeq.png";
import NordicImg from "../public/img/brands/Nordic.png";
import PaniImg from "../public/img/brands/Pani.png";
import SentryImg from "../public/img/brands/Sentry.png";
import TeleImg from "../public/img/brands/Tele.png";

export default function Hero() {
  return (
    <>
      <h1 className="pt-12"></h1>
      <h1 className="pt-12"></h1>
      <h1 className="pt-6"></h1>

      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              WE'LL HELP YOU BUILD TOMORROW'S TECHNOLOGY:
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              From{" "}
              <Mark> proof of concept prototyping to final production embedded software design, we are experts in Bluetooth projects </Mark>
              ; that’s why we’re recommended by industry leaders such as Nordic and Avnet AVID. PSL has partnerships with experts in various
              disciplines, ensuring a full product development experience for your project.
            </p>
            <p className="py-1 text-lg leading-normal text-gray-500 lg:text-lg lg:text-2Xl dark:text-gray-300">
              Contact us to find out how PSL can serve you.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row"></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image src={heroImg} width="516" height="400" alt="Hero Illustration" layout="intrinsic" loading="eager" placeholder="blur" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-[#FF8360]">customers worldwide</span> .
          </div>

          <div className="flex flex-wrap justify-center gap-0 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AvnetLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <EyeqLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <NordicLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <PaniLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SentryLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <TeleLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function AvnetLogo() {
  return (
    <div className="">
      <Image src={AvnetImg} width="100" height="20" />
    </div>
  );
}

function EyeqLogo() {
  return (
    <div className="">
      <Image src={EyeqImg} width="95" height="35" />
    </div>
  );
}

function NordicLogo() {
  return (
    <div className="">
      <Image src={NordicImg} width="130" height="35" />
    </div>
  );
}
function PaniLogo() {
  return (
    <div className="">
      <Image src={PaniImg} width="100" height="30" />
    </div>
  );
}
function SentryLogo() {
  return (
    <div className="">
      <Image src={SentryImg} width="125" height="30" />
    </div>
  );
}
function TeleLogo() {
  return (
    <div className="">
      <Image src={TeleImg} width="210" height="25" />
    </div>
  );
}

//
function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-black-600 bg-[#aeeeff] -900 rounded-md dark:ring-[#aeeeff] dark:bg-[#aeeeff] dark:text-black">
        {props.children}
      </mark>{" "}
    </>
  );
}
