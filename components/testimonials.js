import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.png";
import userTwoImg from "../public/img/user2.png";
import userThreeImg from "../public/img/user3.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              I have seen the Pretty Smart Labs team <Mark>quickly overcome within a short time challenging issues</Mark> which the end
              customer has struggled with over a year and quickly get them to prototype testing.
            </p>

            <Avatar image={userOneImg} name="Erich Van Stralen" title="Avnet AVID" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              The Pretty Smart Labs team has <Mark>deep BLE knowledge</Mark>, especially as it pertains to the Nordic family. I have seen
              their team respond with excellent timing to unexpected situations.
            </p>

            <Avatar image={userTwoImg} name="Michael Knight" title="Nordic Semiconductor" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              PSL’s <Mark>expertise in Bluetooth Low Energy microcontrollers, sensor technologies, and mobile application development</Mark>{" "}
              helped eyeQ develop a disruptive low-power retail display insights / big data solution in a time to market that others said
              was impossible.
            </p>

            <Avatar image={userThreeImg} name="Michael Garel" title="EyeQ" />
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              Pretty Smart Labs was in a joint partnership with Telebiometrics to <Mark>develop a bio-surveillance wearable device</Mark>{" "}
              for the South Korean Intelligence Agency for Fintech and Military research project.
            </p>

            <Avatar image={userOneImg} name="John Caras" title="TeleBiometrics" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              Pretty Smart Labs developed a phenomenal proof of concept for us and{" "}
              <Mark>I would highly recommend their services to any Bluetooth oriented startup</Mark>. I look forward to working with Antonio
              and his team again in the near future.
            </p>

            <Avatar image={userTwoImg} name="Colin Duffy" title="Sentry" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
              Pretty Smart Labs was instrumental in <Mark>our implementation of an ultra-low power wifi solution</Mark> that did not
              sacrifice functionality or user experience and ensured a long battery life in our Pani Smart Water Meter.
            </p>

            <Avatar image={userThreeImg} name="Allen Tsai" title="Pani" />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} width="40" height="40" alt="Avatar" layout="responsive" placeholder="blur" />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

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
