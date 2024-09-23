import Image from "next/image";
import React from "react";

export default function AddComment() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <Image
        width={23}
        height={23}
        src="https://images.pexels.com/photos/28250738/pexels-photo-28250738/free-photo-of-couple-embracing-on-bridge.jpeg"
        alt="Add Post
            "
        className="min-[150px]:w-8 min-[150px]:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full  "
      />
      <textarea
        className="text-white  bg-dark-3 outline-none flex-1 border-none focus:ring-1 focus:ring-blue-400 xs:p-2 sm:p-3  resize-none  rounded-3xl flex-center overflow-scroll scrollbar-hide xs:h-10  md:h-12"
        placeholder={`Write a comment...`}
      />
      <div className="p-2 hover:bg-dark-4 rounded-full flex items-center justify-center">
        <Image
          width={20}
          height={20}
          src="/assets/icons/send.svg"
          alt="send
            "
          className="min-[150px]:w-8 min-[150px]:h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full cursor-pointer  "
        />
      </div>
    </div>
  );
}
