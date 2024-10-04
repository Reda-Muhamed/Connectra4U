import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Birthdays() {
  return (
    // handle the hight depend on the number of requests && handle the see all function
    // i make it scroll bar also
    <div className="h-72 flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto mb-32 custom-scrollbar">
      {/* top */}
      <div className="flex-between">
        <span className="text-gray-200 font-medium">Birthdays</span>
      </div>
      {/* User */}
      <div className="flex-between">
        <div className="flex items-center gap-1">
          <Image
            width={36}
            height={36}
            src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-couple-embracing-on-bridge.jpeg"
            alt="User icon"
            className=" w-9 h-9 object-cover rounded-full  "
          />
          <span className=" ml-2 text-light-2 font-semibold">John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-white rounded-lg font-medium bg-[#4f4dcb] py-2 px-3 hover:bg-[#3e3caf]">
            Celebrate
          </button>
        </div>
      </div>

      {/* Upcoming */}
      <div className="flex gap-4 items-center p-4 bg-dark-4 hover:bg-[#1c1c1c] rounded-lg ">
        <Image
          width={28}
          height={28}
          src="assets/icons/gift.svg"
          alt="gift icon"
          className=" w-7 h-7 object-cover rounded-full  "
        />
        <Link href="/" className="text-light-2 flex flex-col  ">
          <span className="font-me"> Upcoming Birthdays</span>
          <span className="text-sm text-light-3">
            see others 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
}
