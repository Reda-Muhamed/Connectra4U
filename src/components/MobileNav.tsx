"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col px-3 py-3 justify-center items-center"
      >
        <span
          className={`bg-slate-300 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-slate-300 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm my-0.5 ${
                            isOpen ? "opacity-0" : "opacity-100"
                          }`}
        ></span>
        <span
          className={`bg-slate-300 block transition-all duration-300 ease-out 
                          h-0.5 w-6 rounded-sm ${
                            isOpen
                              ? "-rotate-45 -translate-y-1"
                              : "translate-y-0.5"
                          }`}
        ></span>
      </button>
      <div
        className={`z-10 transition-all   duration-300 ease-out absolute w-full h-[calc(100vh-440px)] left-0  top-full bg-dark-3   ${
          isOpen ? "translate-y-0 " : "translate-y-[-300px]  w-0 opacity-0"
        }
          }
          }`}
      >
        <ul className={`text-light-1 w-full ${!isOpen && "hidden"}`}>
          <Link href="/" className="">
            <li className="py-3 px-3 my-2 mx-2 border-b border-light-3 text-xl hover:mx-7 transition-all duration-300 ">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="py-3 px-3 my-2 mx-2 border-b border-light-3 text-xl hover:mx-7 transition-all duration-300 ">
              Friends
            </li>
          </Link>
          <Link href="/">
            <li className="py-3 px-3 my-2 mx-2 border-b border-light-3 text-xl hover:mx-7 transition-all duration-300 ">
              Groups
            </li>
          </Link>
          <Link href="/">
            <li className="py-3 px-3 my-2 mx-2 border-b border-light-3 text-xl hover:mx-7 transition-all duration-300 ">
              Stories
            </li>
          </Link>
          <Link href="/">
            <li className="py-3 px-3 my-2 mx-2 border-b border-light-3 text-xl hover:mx-7 transition-all duration-300 ">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
