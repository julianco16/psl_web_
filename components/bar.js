import React from "react";
import Container from "./container";
// Bar w/ contact us botton 

 export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#00dcff] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Contact us
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Pretty Smart Labs.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href=""
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#fffbfe] bg-[#ff8360] rounded-md px-7 lg:px-10 lg:py-5 ">
            Click here
          </a>
        </div>
      </div>
    </Container>
  );
}
