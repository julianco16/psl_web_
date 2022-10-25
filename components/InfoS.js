import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.general} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.general}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#00DCFF]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.specific1}
                    <p> {item.specific2} </p>
                    <p> {item.specific3} </p>
                    <p> {item.specific4} </p>
                    <p> {item.specific5} </p>
                    <p> {item.specific6} </p>
                    <p> {item.specific7} </p>
                    <p> {item.specific8} </p>
                    <p> {item.specific9} </p>
                    <p> {item.specific10} </p>
                    <p> {item.specific11} </p>
                    <p> {item.specific12} </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    general: "Full Stack IoT Development",
    specific1: "■ End to end architecture",
    specific2: "■ Embedded, RTOS, Bare Metal",
    specific3: "■ Sensors, Peripherals (Flash, IMU, Temp, Light, Pressure, SOC etc.)",
    specific4: "■ Low level comm. (I2C, SPI, USB, UART, etc.)",
    specific5: "■ ADC, DAC, PWM, I2S, NFC, PDM, etc.",
    specific6: "■ DSP for sound, inertia, etc.",
    specific7: "■ Mesh, Thread, Zigbee, WiFi, LTE",
    specific8: "■ MQTT, HTTP/S, TLS, Auth, Certs",
    specific9: "■ Cloud, Big Data, ML",
    specific10: "■ Home Automation Integration (Alexa, Google Assistant...)",
    specific11: "■ App (Android, iOS, web)",
    specific12: "■ Signal conditioning, feature extraction, ML training and edge inference",
  },
  {
    general: "Bluetooth, WiFi, LTE IoT Solutions",
    specific1: "■ Asset Tracking",
    specific2: "■ Retail insight sensors",
    specific3: "■ Industrial IoT",
    specific4: "■ Indoor Location",
    specific5: "■ Predictive Maintenance",
    specific6: "■ Low Power wireless distributed sensors",
    specific7: "■ Health Wearables",
    specific8: "■ Bio Sensors",
  },
  {
    general: "DFM Stages",
    specific1: "■ Proof Of Concept",
    specific2: "■ MVP Prototype",
    specific3: "■ Production Ready",
  },
  {
    general: "Documentation",
    specific1: "■ Design Book",
    specific2: "■ Source Code Documentation",
    specific3: "■ Manufacture Documentation",
    specific4: "■ User Manuals",
    specific5: "■ Engineering Book",
  },
  {
    general: "Testing",
    specific1: "■ Proof of Concept Assertions",
    specific2: "■ MVP Integration",
    specific3: "■ Rapid Development Regression Testing",
    specific4: "■ Pre/Post manufacturing testing",
  },
];
