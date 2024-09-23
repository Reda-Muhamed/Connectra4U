import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserInfoCard() {
  return (
    <div className=" flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar">
      {/* top */}

      <h3 className="text-gray-200 text-lg font-medium">User Info</h3>

      <div className="text-center  ">
        {/* Bio */}
        <p className="text-light-2">
          فَمَنِ اتَّبَعَ هُدَايَ فَلا يَضِلُّ وَلا يَشْقَى
        </p>
      </div>
      <div className="flex items-start gap-3">
        <Image
          src="/assets/icons/graduate.svg"
          alt="school"
          width={25}
          height={25}
          className="w-7 h-7"
        />
        <p className="text-gray-200">
          Studies at{" "}
          <a
            href="school.com"
            className="font-medium hover:underline hover:text-light-2"
            target="_blank"
          >
            Faculty of Computer And Information Science Ain Shams University
          </a>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/homeicon.svg"
          alt="school"
          width={25}
          height={25}
          className="w-7 h-6"
        />
        <p className="text-gray-200">
          Lives in{" "}
          <a
            href="school.com"
            className="font-medium hover:underline hover:text-light-2"
            target="_blank"
          >
            Qalyub
          </a>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/lives.svg"
          alt="school"
          width={25}
          height={25}
          className="w-7 h-6"
        />
        <p className="text-gray-200">
          From{" "}
          <a
            href="school.com"
            className="font-medium hover:underline hover:text-light-2"
            target="_blank"
          >
            Qalyub
          </a>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/icons/status.svg"
          alt="school"
          width={22}
          height={22}
          className="w-6 h-6"
        />
        <p className="text-gray-200">
          <a
            href="school.com"
            className="font-medium hover:underline hover:text-light-2"
            target="_blank"
          >
            Single
          </a>
        </p>
      </div>
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/icons/link.svg"
            alt="link"
            width={22}
            height={22}
            className="w-6 h-6"
          />
          <a
            href="https://www.linkedin.com/in/reda-mohamed-b2a1a5308/"
            className="hover:underline text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            reda.com
          </a>
        </div>
        <span className="font-medium text-light-2 ">Joined Jan 2019</span>
      </div>
      <button className="w-full py-2 px-3 bg-[#4f4dcb] hover:bg-[#363596] text-light-1 font-medium text-[17px] rounded-xl hover:scale-105 transition-all duration-200">
        Follow
      </button>
      <button className="text-rose-600 ml-auto py-2 px-3 hover:bg-[#e50606] rounded-lg w-fit hover:text-light-1 font-medium">
        Block
      </button>
      {/* Add more social links to him ::))))))) */}
    </div>
  );
}
