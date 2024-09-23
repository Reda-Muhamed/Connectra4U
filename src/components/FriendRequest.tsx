import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendRequest() {
  return (
    // handle the hight depend on the number of requests && handle the see all function
    // i make it scroll bar also
    <div className="h-72 flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar">
      {/* top */}
      <div className="flex-between">
        <span className="text-gray-200 ">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs hover:underline">
          See all
        </Link>
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
          <span className="text-gray-200 ml-2 text-light-2 font-semibold">
            John Doe
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            width={28}
            height={28}
            src="/assets/icons/true.svg"
            alt="yes"
            className=" w-7 h-7 object-cover rounded-full  hover:w-8 hover:h-8 cursor-pointer transition-all duration-200 "
          />
          <Image
            width={28}
            height={28}
            src="/assets/icons/false.svg"
            alt="yes"
            className=" w-7 h-7  object-cover rounded-full hover:w-8 hover:h-8 cursor-pointer transition-all duration-200 "
          />
        </div>
      </div>
    </div>
  );
}
