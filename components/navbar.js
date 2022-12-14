// import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
// import { Disclosure } from "@headlessui/react";

// export default function Navbar() {
//   const navigation = ["Home", "Services", "About", "Company", "Blog"];

//   // Logo PSL

//   return (
//     <div className="w-full">
//       <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
//         {/* Logo  */}
//         <Disclosure>
//           {({ open }) => (
//             <>
//               <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
//                 <Link href="/">
//                   <a className="flex items-center space-x-2 text-2xl font-medium text-[#FF8360] dark:text-gray-100">
//                     <span>
//                       <img src="/img/logo.png" alt="pretty smart labs logo" width="350" height="350" className="w-400" />
//                     </span>
//                   </a>
//                 </Link>

//                 <Disclosure.Button
//                   aria-label="Toggle Menu"
//                   className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#FF8360] focus:text-[#FF8360] focus:bg-[#cbf4ff] focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
//                 >
//                   <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                     {open && (
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
//                       />
//                     )}
//                     {!open && (
//                       <path
//                         fillRule="evenodd"
//                         d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//                       />
//                     )}
//                   </svg>
//                 </Disclosure.Button>

//                 <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
//                   <>
//                     {navigation.map((item, index) => (
//                       <Link key={index} href="/">
//                         <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#cbf4ff] focus:text-[#cbf4ff] focus:bg-[#cbf4ff] dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
//                           {item}
//                         </a>
//                       </Link>
//                     ))}
//                     <Link href="/">
//                       <a className="w-full px-6 py-2 mt-3 text-center text-white bg-[#cbf4ff] rounded-md lg:ml-5">Contact us</a>
//                     </Link>
//                   </>
//                 </Disclosure.Panel>
//               </div>
//             </>
//           )}
//         </Disclosure>

//         {/* menu  */}
//         <div className="hidden text-center lg:flex lg:items-center">
//           <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
//             {navigation.map((menu, index) => (
//               <li className="mr-3 nav__item" key={index}>
//                 <Link href="/">
//                   <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-600 hover:text-[#FF8360] focus:text-[#FF8360] focus:bg-[#cbf4ff] focus:outline-none dark:focus:bg-gray-800">
//                     {menu}
//                   </a>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="hidden mr-3 space-x-4 lg:flex nav__item">
//           <Link href="/">
//             <a className="px-6 py-2 text-white bg-[#FF8360] rounded-md md:ml-5">Contact us</a>
//           </Link>

//           <ThemeChanger />
//         </div>
//       </nav>
//     </div>
//   );
// }

// ....................................................................

import ThemeChanger from "./DarkSwitch"; // DarkMode
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#808080");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 1) {
        setColor("#ffffff");
        setTextColor("#808080");
      } else {
        setColor("transparent");
        setTextColor("#808080");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        {/* PSL Logo */}
        <Link href="/">
          <span>
            <img src="/img/logo.png" alt="pretty smart labs logo" width="350" height="350" className="w-400" />
          </span>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#Services">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/#Projects">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/#Testimonials">Testimonials</Link>
          </li>
          <li className="p-4">
            <Link href="/">
              <a className="w-full px-6 py-2 mt-3 text-center text-white bg-[#00DCFF] rounded-md lg:ml-5">Contact us</a>
            </Link>
          </li>
        </ul>

        {/*  */}
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={50} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={50} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#Services">Services</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#Projects">Projects</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#Testimonials">Testimonials</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
