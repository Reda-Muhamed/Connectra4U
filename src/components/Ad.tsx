import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Ad() {
  return (
    <div className="p-4 h-[370px] flex flex-col gap-6 bg-dark-3 rounded-lg shadow-xl overflow-auto custom-scrollbar text-sm ">
      {/* top */}
      <div className="flex-between">
        <span className="text-light-2 font-medium">Sponsored Ads</span>
        <div className="w-10 h-6 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-dark-4">
          <Image
            width={19}
            height={19}
            src="/assets/icons/dots.svg"
            alt="dots icon"
            className="min-[150px]:w-5 min-[150px]:h-5 md:w-6 md:h-6 rounded-full  "
          />
        </div>
      </div>
        {/* ==--== middle ==---== */}
      <div className="w-full border-b border-[#c1c1c1] ">
        <a
          className="flex flex-col gap-2 mb-3 "
          target="_blank"
          href="https://www.aljazeera.com/news/2024/9/21/several-killed-in-israeli-attack-on-gaza-school-sheltering-displaced-palestinians"
        >
          <Image
            src="/assets/ad/palestine.webp"
            alt="save palestinian"
            width={400}
            height={50}
            className="rounded-lg mb-4 h-60 object-cover "
          />

          <div className="flex items-center gap-4">
            <Image
              src="/assets/ad/palestine.webp"
              alt="save palestinian"
              width={25}
              height={25}
              className="rounded-full h-7 w-7 "
            />
            <span className="text-light-1 font-medium text-[18px]">
              Save The Children
            </span>
          </div>
          <div className="text-sm mt-2 text-light-2 font-medium ">
            <p className=" ">
              The dead from the strike on Zeitoun School in Gaza City include 13
              children and six women.
            </p>
          </div>
        </a>
      </div>

      <div className="w-full border-b border-[#c1c1c1] ">
        <a
          className="flex flex-col gap-2 mb-3"
          target="_blank"
          href="https://www.aljazeera.com/news/2024/9/21/several-killed-in-israeli-attack-on-gaza-school-sheltering-displaced-palestinians"
        >
          <Image
            src="/assets/ad/palestine5.webp"
            alt="save Gaza"
            width={400}
            height={50}
            className="rounded-lg mb-4 h-60 object-cover "
          />

          <div className="flex items-center gap-4">
            <Image
              src="/assets/ad/palestine5.webp"
              alt="save palestinian"
              width={25}
              height={25}
              className="rounded-full h-7 w-7 "
            />
            <span className="text-light-1 font-medium text-[18px]">
              Save Palestine
            </span>
          </div>
          <div className="text-sm mt-2 text-light-2 font-medium">
            <p>
              Israeli attack on Gaza school sheltering displaced Palestinians
              kills 22
            </p>
          </div>
        </a>
      </div>

      <div className="w-full border-b border-[#c1c1c1]  ">
        <a
          className="flex flex-col gap-2 mb-3 "
          target="_blank"
          href="https://www.aljazeera.com/news/2024/9/21/several-killed-in-israeli-attack-on-gaza-school-sheltering-displaced-palestinians"
        >
          <Image
            src="/assets/ad/palestine2.jpg"
            alt="save palestinian"
            width={400}
            height={50}
            className="rounded-lg mb-4 h-60 object-cover "
          />

          <div className="flex items-center gap-4">
            <Image
              src="/assets/ad/palestine2.jpg"
              alt="save palestinian"
              width={25}
              height={25}
              className="rounded-full h-7 w-7 "
            />
            <span className="text-light-1 font-medium text-[18px]">
              Save Gaza
            </span>
          </div>
          <div className="text-sm  mt-2 text-light-2 font-medium">
            <p>Israeli airstrikes hit densely populated Beirut neighbourhood</p>
          </div>
        </a>
      </div>

      <div className="w-full  ">
        <a
          className="1flex flex-col gap-2 mb-4"
          target="_blank"
          href="https://www.aljazeera.com/news/2024/9/21/several-killed-in-israeli-attack-on-gaza-school-sheltering-displaced-palestinians"
        >
          <Image
            src="/assets/ad/palestine3.jpg"
            alt="save palestinian"
            width={400}
            height={50}
            className="rounded-lg mb-4 h-60 object-cover "
          />

          <div className="flex items-center gap-4">
            <Image
              src="/assets/ad/palestine3.jpg"
              alt="save palestinian"
              width={25}
              height={25}
              className="rounded-full h-7 w-7 "
            />
            <span className="text-light-1 font-medium text-[18px]">
              لا اله الا الله
            </span>
          </div>
          <div className="text-sm mt-2  text-light-2 font-medium">
            <p>
              Israeli forces kill dozens across Gaza as tanks advance deeper
              into Rafah
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
