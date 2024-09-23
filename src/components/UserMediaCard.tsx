import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard() {
  return (
    <div className="h-72 flex flex-col gap-4 p-4  bg-dark-3 rounded-lg shadow-lg text-sm overflow-auto custom-scrollbar mb-32">
      {/* top */}
      <div className="mb-2">
        <span className="text-gray-200 font-medium">Photos</span>
      </div>
      <div className="flex justify-center flex-wrap lg:gap-2 xl:gap-3">
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="relative w-[74px] h-24">
          <Link href="/post/id">
            <Image
              src="https://images.pexels.com/photos/2341965/pexels-photo-2341965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              fill
              alt="photo"
              quality={90}
              className=" object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
