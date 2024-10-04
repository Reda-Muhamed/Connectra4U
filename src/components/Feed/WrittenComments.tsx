import { timeSpentSince } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function WrittenComments() {
  return (
    <div>
      <h2 className=" mt-1 mb-3 ml-[5%] hover:underline  hover:cursor-pointer text-light-3 font-semibold">
        View more Comments
      </h2>
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div>
          <Image
            width={30}
            height={30}
            src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-couple-embracing-on-bridge.jpeg"
            alt="Add Post
              "
            className="min-[150px]:w-8 min-[150px]:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full  "
          />
        </div>
        {/* Comment */}
        <div className="flex-1 flex flex-col ">
          <p className="text-sm text-[#e1dcdc]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem
            perspiciatis odio distinctio delectus consequuntur, quisquam eveniet
            est velit labore aperiam fuga ullam numquam fugiat adipisci deserunt
            doloribus laudantium et.
          </p>
          <div className="flex items-center gap-4 mt-2  text-xs ">
            <span className="hover:underline cursor-pointer">
              {timeSpentSince(new Date(Date.now()))}
            </span>
            <span className="hover:underline cursor-pointer">Like</span>
            <span className="hover:underline cursor-pointer ">Reply</span>
          </div>
        </div>
        {/* Icons */}
        <div className="w-10 h-6 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-dark-4">
          <Image
            width={19}
            height={19}
            src="/assets/icons/dots.svg"
            alt="dots icon
              "
            className="min-[150px]:w-5 min-[150px]:h-5 md:w-6 md:h-6  rounded-full  "
          />
        </div>
      </div>
    </div>
  );
}
