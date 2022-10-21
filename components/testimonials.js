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
            <p className="text-2xl leading-normal ">
              <Mark></Mark> 
              I have seen the Pretty Smart Labs team quickly overcome within a short time challenging issues which the end customer has struggled with over a year and quickly get them to prototype testing.
            </p>

            <Avatar
              image={userOneImg}
              name="-Erich Van Stralen"
              title="Avnet AVID"
            />
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            The Pretty Smart Labs team has deep BLE knowledge, especially as it pertains to the Nordic family. I have seen their team respond with excellent timing to unexpected situations.
            </p>

            <Avatar
              image={userTwoImg}
              name="Michael Knight"
              title="Nordic Semiconductor"
            />
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            PSL’s expertise in Bluetooth Low Energy microcontrollers, sensor technologies, and mobile application development helped eyeQ develop a disruptive low-power retail display insights / big data solution in a time to market that others said was impossible.  
            </p>

            <Avatar
              image={userThreeImg}
              name="Michael Garel"
              title="EyeQ"
            />
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Pretty Smart Labs was in a joint partnership with Telebiometrics to develop a bio-surveillance wearable device for the South Korean Intelligence Agency for Fintech and Military research project. 
            </p>

            <Avatar
              image={userOneImg}
              name="John Caras"
              title="TeleBiometrics"
            />
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Pretty Smart Labs developed a phenomenal proof of concept for us and I would highly recommend their services to any Bluetooth oriented startup. I look forward to working with Antonio and his team again in the near future. 
            </p>

            <Avatar
              image={userTwoImg}
              name="Colin Duffy"
              title="Sentry"
            />
          </div>
        </div>
        
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Pretty Smart Labs was instrumental in our implementation of an ultra-low power wifi solution that did not sacrifice functionality or user experience and ensured a long battery life in our Pani Smart Water Meter.   
            </p>

            <Avatar
              image={userThreeImg}
              name="Allen Tsai"
              title="Pani"
            />
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
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
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
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
