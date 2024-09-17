import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Spinner from "./Spinner";
import MobileNav from "./MobileNav";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky z-50 md:px-8 lg:px-10 xl:px-14 bg-dark-2 w-full text-light-2 ">
      {" "}
      <div className="flex-between py-4 px-5">
        {/* Left */}
        <div className="lg:w-[25%]">
          <Link href="/" className="flex gap-3 items-center ">
            <img
              src="/assets/images/logo.svg"
              className=" py-[5px] "
              width={168}
              height={360}
            />
          </Link>
        </div>
        {/* center */}
        <div className="hidden md:flex gap-4 lg:gap-6 lg:flex-1">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/assets/icons/home.svg"
              alt="home icon"
              width={19}
              height={19}
            />
            <span className="text-sm lg:text-md text-light-2">Home page</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image
              src="/friends.svg"
              alt="friends icon"
              width={22}
              height={22}
            />
            <span className="text-sm text-light-2 lg:text-md">Friends</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/story.svg" alt="stories icon" width={22} height={22} />
            <span className="text-sm text-light-2 lg:text-md">Stories</span>
          </Link>
        </div>
        {/* //Right  */}
        <div className="flex gap-6 items-center">
          {true ? (
            <Button variant="ghost" className="shad-button_ghost">
              <img src="/assets/icons/logout.svg" />
            </Button>
          ) : (
            <Spinner />
          )}
          <Link href={`/profile/`} className="flex-center gap-3">
            <img
              src={"assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
          <div className="md:hidden ">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
