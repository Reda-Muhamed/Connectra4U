import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div className="p-4 w-full bg-dark-2 rounded-xl shadow-md overflow-scroll  text-xs scrollbar-hide mt-2">
      <div className="flex gap-8 w-max">
        <div className="text-white flex flex-col justify-center items-center gap-2 cursor-pointer">
          <Image
            width={60}
            height={60}
            src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-couple-embracing-on-bridge.jpeg"
            alt="Story 1"
            className="min-[150px]:w-12 min-[150px]:h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 rounded-full ring-2 "
          />
          <span className="font-medium ">user name</span>
        </div>
      </div>
    </div>
  );
}
